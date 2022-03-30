// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

//safemath contract allows for safe operations for basic calculations


contract Token{
	
	event Transfer(
		address indexed from,
		address indexed to,
		uint value
	);

	event Approval(address indexed from,
		address indexed _spender,
		uint value
		);

	//mapping addresses with the balance 
	mapping(address=>uint256) public balanceOf;
	//mapping addresses with reliable addresses which can spend a specific amount of token from the senders account
	mapping(address=>mapping(address=>uint256))public allowed;

	constructor(){
		//totalsupply given to the owner of the SC
		address owner=msg.sender;
		string memory name;
		string memory symbol;
		name="Token-Tale Token";
		symbol="TTT";
		uint256 _totalSupply=100000; //need to decide the final total supply 
		//uint8 decimals=10;
		balanceOf[owner]=_totalSupply;
		emit Transfer(address(0),owner,_totalSupply);
	}
	//safe Math
	    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }

    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }

    function safeMul(uint a, uint b) public pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }

    function safeDiv(uint a, uint b) public pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
	function showBalance(address addy) public view returns(uint bal) {
		// require(msg.sender==addy);
		bal=balanceOf[addy];
		//return bal;
	}
	//transfers value of tokens from the msg.sender to the _to address
	function transfer(address _to,uint256 _value) public returns (bool success){
		balanceOf[msg.sender]=safeSub(balanceOf[msg.sender],_value);
		balanceOf[_to]=safeAdd(balanceOf[_to],_value);
		emit Transfer(msg.sender,_to,_value);
		return true;
	}
	//trans
	function approve(address _spender, uint _value) public returns(bool success){
		allowed[msg.sender][_spender]=_value;
		emit Approval(msg.sender,_spender,_value);
		return true;
	}
	function allowance(address _tokenOwner,address _spender) public view returns(uint remaining){
		return allowed[_tokenOwner][_spender];
	}

	function transferFrom(address _from, address _to,uint _value) public returns(bool success){
		balanceOf[_from]=safeSub(balanceOf[_from],_value);
		allowed[_from][msg.sender]=safeSub(allowed[_from][msg.sender],_value);
		balanceOf[_to]=safeAdd(balanceOf[_to],_value);
		emit Transfer(_from,_to,_value);
		return true;
	}
}