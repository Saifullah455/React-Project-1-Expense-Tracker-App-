import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext';

function Child() {

    let {transaction, addTransaction} = useContext(TransactionContext)
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault()
        if(Number(newAmount) == 0){
            alert("Please Enter Correct Value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            decri: newDesc
        })
    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0)
                income += transaction[i].amount
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0)
                expense += transaction[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> <span>${getIncome() + getExpense()}</span></h3>

            <div className="expense-container">
                <h3>INCOME <br /> ${getIncome()}</h3>
                <h3>EXPENSE <br /> ${getExpense() }</h3>
            </div>

            <h3>History</h3>
            <hr />

            <h3>Add New Transection</h3>
            <hr />

            <ul className="transaction-list">
                {transaction.map((transObj, ind) => {
                    return(
                        <li key={ind}>
                            <span>{transObj.decri}</span>
                            <span>${transObj.amount}</span>
                         </li>
                    )
                })}     
            </ul>

            <form className="transection-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text" placeholder="Text" onChange={(ev)=>setDesc(ev.target.value)} required/>
                </label>
                <br /><br />
                <label>
                    Enter Amount <br />
                (negative-expense, positive-income) <br />
                    <input type="number" placeholder="Amount" onChange={(ev)=>setAmount(ev.target.value)} required/>
                </label>
                <br /><br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;
