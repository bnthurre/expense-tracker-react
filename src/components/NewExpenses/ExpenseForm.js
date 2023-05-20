import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //useSate

  //using multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   //using single useState
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //handler functions
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // //updating previous value inthis method is not sever
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    // //updating state depending on prev state
    // setUserInput((prevSate)=>{
    //     return{...prevSate, enteredTitle:e.target.value}
    // })
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  //handling data submited the form

  const submitHandler = (e) => {
    //prevent to submit form and referesh the page
    e.preventDefault();
    //handle data submited manually and collect them
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min={0.01}
              step={0.01}
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max={2023 - 31 - 12}
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
