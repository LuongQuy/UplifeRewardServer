const Web3 = require('web3');
const contract_config = require('../configs/contract_config')
const account_config = require('../configs/account_config')
const Tx = require('ethereumjs-tx')
const rewardModel = require('../models/reward')
const historyModel = require('../models/history')
 
//Infura HttpProvider Endpoint
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/66c96dc1ab7a4473b0866d378964e9d5"));

const myAccount = account_config.address;
const privateKey = Buffer.from(account_config.privateKey, 'hex')

web3.eth.defaultAccount = myAccount;
 
//creating contract object
var contract = new web3.eth.Contract(contract_config.contractABI,contract_config.contractAddress);

exports.giveReward = (req, res) => {
    var email = req.body.email;
    var reward = req.body.reward;
    var data = contract.methods.giveReward(email, reward).encodeABI();
    
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
            // res.json(tx);
        });
    });

    rewardModel.findOne({email: email}, (err, rewardResult) => {
        if(rewardResult){
            rewardResult.reward = parseInt(rewardResult.reward) + parseInt(reward);
            rewardResult.save((err, result) => res.send(result));
        } else{
            var newReward = new rewardModel({
                email: email,
                reward: reward
            });
            newReward.save((err, result) => {
                res.json(result);
            })
        }
    }) 
}

exports.getReward = (req, res) => {
    // contract.methods.getReward(req.body.userId).call()
    // .then(reward => res.send(reward))
    rewardModel.findOne({email: req.body.email}, (err, result) => {
        res.json(result);
    })
}

exports.withdrawEth = (req, res) => {
    var email = req.body.email;
    var ethAddress = req.body.ethAddress;
    var reward = req.body.reward;
    var ethAmount = (parseFloat(reward)/1000).toString();

    rewardModel.findOne({email: email}, (err, rewardDoc) => {
        if(rewardDoc){
            rewardDoc.reward -= reward;
            rewardDoc.save((err, result) => {

                if(web3.utils.isAddress(ethAddress)){
                    var data = contract.methods.spendReward(email, reward).encodeABI();
                    web3.eth.getTransactionCount(myAccount, (err, txCount) => {
                        // Build the transaction
                        var txObjectToContract = {
                            nonce:    web3.utils.toHex(txCount),
                            to:       contract_config.contractAddress,
                            value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
                            gasLimit: web3.utils.toHex(2100000),
                            gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
                            data: data  
                        }
                        // Sign the transaction
                        var tx = new Tx(txObjectToContract);
                        tx.sign(privateKey);
                    
                        var serializedTx = tx.serialize();
                        var raw = '0x' + serializedTx.toString('hex');
                    
                        // Broadcast the transaction
                        var transaction = web3.eth.sendSignedTransaction(raw, (err, tx) => {
                            web3.eth.getTransactionCount(myAccount, (err, txCount) => {
                                // Build the transaction
                                var txObjectToContract = {
                                    nonce:    web3.utils.toHex(txCount),
                                    to:       ethAddress,
                                    value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
                                    gasLimit: web3.utils.toHex(2100000),
                                    gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
                                }
                                // Sign the transaction
                                var tx = new Tx(txObjectToContract);
                                tx.sign(privateKey);
                            
                                var serializedTx = tx.serialize();
                                var raw = '0x' + serializedTx.toString('hex');
                            
                                // Broadcast the transaction
                                var transaction = web3.eth.sendSignedTransaction(raw, (err, tx) => {
                                    res.send(tx)
                                });
                            });
                        });
                    });

                    
                }else{
                    res.send('Not an anddress');
                }
            });
        }else{
            res.send('email is not exist');
        }
    })
}