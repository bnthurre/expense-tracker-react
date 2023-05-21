import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent = <p>No Expenses Found!</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses Not Found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
