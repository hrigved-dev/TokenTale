import logo from './logo.svg'
import React, { Component } from 'react'
import './App.css'
import Web3 from 'web3'

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

 }

 constructor(props)  {
  super(props)
  this.state = { 
  account: '',
  ethBalance: '0',
  loading: true
}
}

render () {
  return (
    <div>
            <p>&nbsp;&nbsp;&nbsp;Welcome to my wallet</p>
            <p>&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/prithviraj_nike08/">                                                               
            <button type="button" >Creator</button>
            </a></p>
               <p> &nbsp;&nbsp;&nbsp; Account: {this.state.account} </p>
                <p> &nbsp;&nbsp;&nbsp; Ethereum Balance: {window.web3.utils.fromWei(this.state.ethBalance, 'Ether')} ETH </p>
         </div>
  );
}
}

export default App;
