import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card.jsx'
import ExpensesFilter from './ExpensesFilter.jsx'
import ExpenseList from './ExpenseList.jsx'
import ExpenseChart from './ExpenseChart.jsx'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");
  
const filteredExpenses = props.items.filter((expense) => {
  if (filteredYear === "all") {
    return expense;
  } else {
    return expense.date.getFullYear().toString() === filteredYear;
  }
});

const filterChangeHandler = (selectYear) => {
  setFilteredYear(selectYear);
};

  return (
    <Card className="expenses">
      <ExpensesFilter
      selected={filteredYear}
      onChangeFilter={filterChangeHandler}
      totalExpenses={filteredExpenses.length} />
      <hr />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}  />
    </Card>
  );
}

export default Expenses
