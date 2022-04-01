import logo from './logo.svg'
import React, { Component } from 'react'
import './App.css'
import Web3 from 'web3'
import Token from './abis/Token.json'

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
 }

 async loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
}

async loadBlockchainData() {

  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  const ethBalance = await web3.eth.getBalance(this.state.account)
  this.setState({ ethBalance })

  const networkId = await web3.eth.net.getId()
  const tokenData = Token.networks[networkId]
  if(tokenData) {
  const token = new web3.eth.Contract(Token.abi, tokenData.address)
  this.setState({ token })
  let tokenBalance = await token.methods.balanceOf(this.state.account).call()
  this.setState({ tokenBalance: tokenBalance.toString() })
  } else {
  window.alert('Token contract not deployed to detected network.')
  }

 }

 constructor(props)  {
  super(props)
  this.state = { 
  account: '',
  ethBalance: '0',
  tokenBalance: '0',
  loading: true
}
}

render () {
  return (
    <div>
            <p>&nbsp;&nbsp;&nbsp;Welcome to my wallet</p>
            <p>&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/prithviraj_nike08/">                                                               
            <button type="button" >Creator</button></a>
            </p>
            <p>&nbsp;&nbsp;&nbsp;<button type="button" onClick={this.loadWeb3}>Connect Wallet</button></p>
            <p>&nbsp;&nbsp;&nbsp;<button type="button">Tip</button></p>
            <p> &nbsp;&nbsp;&nbsp; Account: {this.state.account} </p>
            <p> &nbsp;&nbsp;&nbsp; Ethereum Balance: {window.web3.utils.fromWei(this.state.ethBalance, 'Ether')} ETH </p>
            <p> &nbsp;&nbsp;&nbsp; Token Balance: {window.web3.utils.fromWei(this.state.tokenBalance, 'Ether')} TT </p>
         </div>
  );
}
}

export default App;
