const contract_config = require('./configs/contract_config')
const account_config = require('./configs/account_config')
 
//Infura HttpProvider Endpoint
web3js = new web3(new web3.providers.HttpProvider("https://ropsten.infura.io/v3/66c96dc1ab7a4473b0866d378964e9d5"));
 
var myAddress = account_config.address;
var privateKey = Buffer.from(account_config.privateKey, 'hex')
 
var contractABI = contract_config.contractABI;
var contractAddress = contract_config.contractAddress;
 
//creating contract object
var contract = new web3js.eth.Contract(contractABI,contractAddress);
 
exports.showAvailReward = (req, res) => {
    
}
 
exports.spendReward = (req, res) => {
 
}
 
exports.sendReward = (req, res) => {
    
}