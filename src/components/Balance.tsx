import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction: any) => transaction.amount);
    console.log(amounts);

    const total = amounts.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>Rs. {total}</h1>
        </div>
    );
}
