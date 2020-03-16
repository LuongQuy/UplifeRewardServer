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
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_userAddress",
                    "type": "address"
                },
                {
                    "name": "_reward",
                    "type": "uint256"
                }
            ],
            "name": "sendEthToUser",
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
    contractAddress: '0x9bbd9c787cfa3b47d7d29dc023723aeccfc5f9de'
}