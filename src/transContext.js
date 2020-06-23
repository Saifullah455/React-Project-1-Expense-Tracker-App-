import React, { createContext, useReducer } from "react";
import TransactionReducer from './transReducer';

const initialTransaction = [
    {amount: 1000, decri: "Cash"},
    {amount: -60, decri: "Cookies"},
    {amount: 100, decri: "Deposit"}
]

export const TransactionContext = createContext(initialTransaction);


export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                decri: transObj.decri 
            }
        })
    }
    return(
        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}