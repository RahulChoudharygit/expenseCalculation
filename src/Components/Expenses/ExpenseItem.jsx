import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.items.date} />
        <div className="expense-item__description">
          <h2>{props.items.title}</h2>
          <div className="expense-item__price">${props.items.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
