import React from 'react'
import './NewExpense.css'
import { useState } from "react";
import NewExpenseForm from './NewExpenseForm.jsx'

const NewExpense = (props) => {

  const [form, setForm] = useState(true)
  const openForm = () => {

    if (form === true) {
      setForm(false)
    } else {
      setForm(true)
    }
  }
    
      return (
        <div className="new-expense">
           {form ? <button onClick={openForm}>Add New Expenses</button>: <NewExpenseForm onAddExpense={props.onAddExpense} closeForm = {setForm}/>}
        </div>
      );
}

export default NewExpense
