import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const addExpenseHadler=(enteredExpense)=>{
        const expenseData={
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        console.log(expenseData)
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={addExpenseHadler} />
    </div>
  );
};

export default NewExpense;
