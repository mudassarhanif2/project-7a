import React from 'react';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
import { AddTransaction } from './components/AddTransaction';

import firebase from './firebase';

function App() {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token) => {
    window.alert("welcome to expense tracker app");
    // prompt("token", token);
    // console.log("token", token);
  })
  return(
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}


export default App;