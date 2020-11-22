import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State
var initialState : {
  transactions: any;
  deleteTransaction?: any;
  addTransaction?: any;
}


initialState = {
  transactions : [],
}


//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider: React.FC<any> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action
    function deleteTransaction(id: number) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    }

    function addTransaction(transaction: any[]) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      });
    }
    
    return(<GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
        {children}
      </GlobalContext.Provider>
    );
}