// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <0.9.0;
import './Token.sol';

contract Tip{
   
    //string public name= "Tip";
    address owner;
    Token public token;
    

    constructor(Token _token){
        token=_token;
        owner=msg.sender;
    }
    event TipSuccess (
        address tip_to,
        address tipper,
        uint amount
        );


    function tipper(address reciever, uint _amount) payable public returns(bool success){

        token.transfer(reciever, _amount);
        success=true;

    }
    // modifier onlyOwner(address tipper){
    //     require(tipper==owner);
    //     _;
    // }
    
}

