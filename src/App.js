import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  {
    expenseDate : new Date(2022, 2, 1),
    expenseTitle : "Movie Expense",
    expenseAmount : "200"
  },
  {
    expenseDate : new Date(2022, 2, 2),
    expenseTitle : "Market Expense",
    expenseAmount : "300"
  },
  {
    expenseDate : new Date(2022, 2, 3),
    expenseTitle : "Finance Expense",
    expenseAmount : "400"
  },
  {
    expenseDate : new Date(2022, 2, 4),
    expenseTitle : "Home Expenses",
    expenseAmount : "500"
  }
]

function App() {

  const [ expenses, setExpenses ] = useState(dummyExpenses);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses ]
    })
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
