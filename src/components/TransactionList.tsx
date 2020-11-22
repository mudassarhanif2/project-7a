import React, { useContext  } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions }: any = useContext(GlobalContext);
    return (
        <>
            <h3 className='history'>History</h3>
            <ul className="list">
                {transactions.map((transaction: any) => (<Transaction key={transaction.id } transaction={transaction}/>))}
                
            </ul>
        </>
    )
}
