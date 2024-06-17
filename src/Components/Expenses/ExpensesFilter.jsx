import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

  const handleChange = (e) => {
    let selectedYear = e.target.value;
    props.onChangeFilter(selectedYear);
  }
  const currentYear = new Date().getFullYear();


  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Years ({props.totalExpenses})</label>
        <select id='dropdown' value={props.selected} onChange={handleChange}>
          <option value="all">All</option>
          <option value={currentYear}>{currentYear}</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
