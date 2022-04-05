import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {

    const [ isClicked, setIsClicked ] = useState(false);

    function saveExpenseDataHandler(inputExpenseData) {
        const expenseData = {
            ...inputExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    function newExpenseHandler() {
        setIsClicked(true);
    }

    return (
        <div className="new-expense">
            { !isClicked 
                ? <button onClick={newExpenseHandler}> Add New Expense </button> 
                : <ExpenseForm onCancel={setIsClicked} onSaveExpenseData={saveExpenseDataHandler}/> 
            }
        </div>
    );
}

export default NewExpense;