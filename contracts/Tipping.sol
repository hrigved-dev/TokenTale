// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;
import './Token.sol';

contract Tip{
    Token public token;
    string public name="Tip";
    address owner;

    constructor() {
        owner=msg.sender;
    }
    event TipSuccess(
        address tip_to,
        address tipper,
        uint amount
        );

    function tip(address _tip_to,address tipper, uint _amount) public onlyOwner(tipper) returns(bool success){

        if (token.transfer(_tip_to, _amount)== true){
            success=true;
            emit TipSuccess(_tip_to,tipper,_amount);
        }
        else{
            success=false;
        }

    }
    modifier onlyOwner(address tipper){
        require(tipper==owner);
        _;
    }
    
}

