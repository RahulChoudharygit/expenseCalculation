import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {


    return (
        <ul className="expenses-list">
            {
                props.items.map((element, index, array) => (
                    <ExpenseItem items={element}/>
                ))
            }
        </ul>
    )
}

export default ExpenseList