// import logo from './logo.svg'
// import React, { Component } from 'react'
// import './App.css'
// import Web3 from 'web3'

// class App extends Component {
//   async componentWillMount() {
//     await this.loadWeb3()
//     await this.loadBlockchainData()
//  }

//  async loadWeb3() {
//   if (window.ethereum) {
//     window.web3 = new Web3(window.ethereum)
//     await window.ethereum.enable()
//   }
//   else if (window.web3) {
//     window.web3 = new Web3(window.web3.currentProvider)
//   }
//   else {
//     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
//   }
// }

// async loadBlockchainData() {

//   const web3 = window.web3
//   const accounts = await web3.eth.getAccounts()
//   this.setState({ account: accounts[0] })
//   const ethBalance = await web3.eth.getBalance(this.state.account)
//   this.setState({ ethBalance })

//  }

//  constructor(props)  {
//   super(props)
//   this.state = { 
//   account: '',
//   ethBalance: '0',
//   loading: true
// }
// }

// render () {
//   return (
//     <div>
//             <p>&nbsp;&nbsp;&nbsp;Welcome to my wallet</p>
//             <p>&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/prithviraj_nike08/">                                                               
//             <button type="button" >Creator</button>
//             </a></p>
//                <p> &nbsp;&nbsp;&nbsp; Account: {this.state.account} </p>
//                 <p> &nbsp;&nbsp;&nbsp; Ethereum Balance: {window.web3.utils.fromWei(this.state.ethBalance, 'Ether')} ETH </p>
//          </div>
//   );
// }
// }

// export default App;

import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Web3 from 'web3'
import tokentale from './images/mainLogo1.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'
import Login from './components/Login/Login';

// function App() {
//   return (
//     <div className='App'>
//       <Login/>
//     </div>
//   )
// }

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>TokenTale</Typography>
        <img className={classes.image} src = {tokentale} alt='tokentale' height="100" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
            <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
