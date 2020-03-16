const Web3 = require('web3');
const contract_config = require('../configs/contract_config')
const account_config = require('../configs/account_config')
const Tx = require('ethereumjs-tx')
 
//Infura HttpProvider Endpoint
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/66c96dc1ab7a4473b0866d378964e9d5"));

const myAccount = account_config.address;
const privateKey = Buffer.from(account_config.privateKey, 'hex')

web3.eth.defaultAccount = myAccount;
 
//creating contract object
var contract = new web3.eth.Contract(contract_config.contractABI,contract_config.contractAddress);

exports.giveReward = (req, res) => {
    var userId = req.body.userId;
    var reward = req.body.reward;
    var data = contract.methods.giveReward(userId, reward).encodeABI();
    
    web3.eth.getTransactionCount(myAccount, (err, txCount) => {
        // Build the transaction
        var txObject = {
            nonce:    web3.utils.toHex(txCount),
            to:       contract_config.contractAddress,
            value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
            gasLimit: web3.utils.toHex(2100000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
            data: data  
        }
        // Sign the transaction
        var tx = new Tx(txObject);
        tx.sign(privateKey);
    
        var serializedTx = tx.serialize();
        var raw = '0x' + serializedTx.toString('hex');
    
        // Broadcast the transaction
        var transaction = web3.eth.sendSignedTransaction(raw, (err, tx) => {
            res.json(tx);
        });
    });
}

exports.getReward = (req, res) => {
    contract.methods.getReward(req.body.userId).call()
    .then(reward => res.send(reward))
}

exports.sendEth = (req, res) => {
    var userId = req.body.userId;
    var userAddress = req.body.userAddress;
    var reward = req.body.reward;

    if(web3.utils.isAddress(userAddress)){
        var data = contract.methods.sendEth(userId, userAddress, reward).encodeABI();
        web3.eth.getTransactionCount(myAccount, (err, txCount) => {
            // Build the transaction
            var txObject = {
                nonce:    web3.utils.toHex(txCount),
                to:       contract_config.contractAddress,
                value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
                gasLimit: web3.utils.toHex(2100000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
                data: data  
            }
            // Sign the transaction
            var tx = new Tx(txObject);
            tx.sign(privateKey);
        
            var serializedTx = tx.serialize();
            var raw = '0x' + serializedTx.toString('hex');
        
            // Broadcast the transaction
            var transaction = web3.eth.sendSignedTransaction(raw, (err, tx) => {
                res.json(tx);
            });
        });
    }else{
        res.send('Not an anddress');
    }
}