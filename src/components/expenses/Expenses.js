import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
// {/* 
//       method one for consditional content 
//       {/* {filteredExpense.length === 0 && <p>No data Found!</p>}
//       {filteredExpense.length > 0 &&
//       filteredExpense.map((expenses,index) => (
//         <ExpenseItem
//           key={expenses.id}
//           title={expenses.title}
//           amount={expenses.amount}
//           date={expenses.date}
//         />
//       ))   
//       } */} 

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses= {filteredExpense}/>
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
