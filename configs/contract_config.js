module.exports = {
    contractABI: [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "userId",
                    "type": "string"
                }
            ],
            "name": "getReward",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_userId",
                    "type": "string"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "giveReward",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "userId",
                    "type": "string"
                },
                {
                    "name": "_userAddress",
                    "type": "address"
                },
                {
                    "name": "reward",
                    "type": "uint256"
                }
            ],
            "name": "sendEth",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_userId",
                    "type": "string"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "name": "_spentOnMsg",
                    "type": "string"
                }
            ],
            "name": "spendReward",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        }
    ],
    contractAddress: '0x772866a111D75E611E5c8D035aaa9b28E1960Dcd'
}