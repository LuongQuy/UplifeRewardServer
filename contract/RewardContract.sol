pragma solidity ^0.4.11;

contract SmartReward {
    address public owner;
    mapping (string => uint) private reward;

    function SmartReward () {
        owner = msg.sender;
    }

    modifier ifOwner() { 
        if (msg.sender != owner) {
            revert();
        }
        _;
    }

// Give reward after completing certain task
    function giveReward(string _userId, uint _value) public ifOwner{
        if (_value < 0) revert();
        reward[_userId] += _value;
    }

// Get user's current reward points
    function getReward(string userId) constant returns(uint) {
        return reward[userId];
    }

// Spend reward to buy items
    function spendReward(string _userId, uint _value, string _spentOnMsg) ifOwner {
        address _blank;
        if (reward[_userId] < _value ) revert();
        reward[_userId] -= _value;
    }
    
    function getBalance() public returns(uint256){
        return address(this).balance;
    }
    
    function sendEth(string userId, address _userAddress, uint256 reward) ifOwner {
        uint256 weiAmount = reward*(10**15);
        if(this.balance < weiAmount) revert();
        _userAddress.transfer(weiAmount);
    }

// Fallback function - Called if other functions don't match call or
    function () public payable {
        revert(); // revert() reverts state to before call
    }
}