import React, { useState } from 'react'
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {

  const onAddExpense = props.onAddExpense

  const [title, setTitle] = useState(null);
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);

  const handleTitle = (e) => {
    return setTitle(e.target.value)
  }
  const handleAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const submit = (event) => {
    event.preventDefault();
    onAddExpense(
      {
        id: "e007",
        title: title,
        amount: Number(amount),
        date: new Date(date)
      })

    setTitle('')
    setAmount('')
    setDate('')
  }

  const closeForm = () => {
    props.closeForm(true)
  }

  return (
    <form onSubmit={submit}>
      {/* <h1>{title}</h1>
      <h1>{amount}</h1>
      <h1>{date}</h1> */}
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label >Title</label>
          <input
            required
            type="text"
            placeholder="Title"
            onChange={handleTitle}
            value={title}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            placeholder="Amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmount}
            value={amount}

          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            max="Date().toISOString().slice(0, -14)"
            onChange={handleDate}
            value={date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="reset" onClick={closeForm}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default NewExpenseForm
