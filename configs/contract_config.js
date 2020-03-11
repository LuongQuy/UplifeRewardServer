module.exports = {
    contractABI: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "name": "_rewardReasonMsg",
                    "type": "string"
                }
            ],
            "name": "giveReward",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "name": "_senderMsg",
                    "type": "string"
                }
            ],
            "name": "sendReward",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "setAvailRewardPoints",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_refill",
                    "type": "address"
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
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "inputs": [
                {
                    "name": "initValue",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "constructor",
            "stateMutability": "nonpayable"
        },
        {
            "payable": false,
            "type": "fallback",
            "stateMutability": "nonpayable"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_event",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "_reason",
                    "type": "string"
                }
            ],
            "name": "BroadcastReward",
            "type": "event"
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
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "showAvailReward",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "showMyReward",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        }
    ],
    contractAddress: '0x17c809d844A7907bF7331E52c63b1791d0c53Cca'
}