import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const addExpenseHadler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
    console.log(expenseData);
  };
  const [isEditing, setIsEditing] = useState(false);

  const StartEditingHandler = () => {
    setIsEditing(true);
  };
  const EndEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={StartEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpense={addExpenseHadler} onCancel={EndEditingHandler} />}
    </div>
  );
};

export default NewExpense;
