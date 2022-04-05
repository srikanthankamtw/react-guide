import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    function filterYearHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.expenseDate.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
            <ExpenseFilter 
                selected={filteredYear} 
                onFilterYear={filterYearHandler} 
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses} />  
            </Card>
        </div>
    );
}

export default Expenses;