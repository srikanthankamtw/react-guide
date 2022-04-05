import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback"> No expenses found!!!</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.expenses.map((expense, index) => {
                    return <ExpenseItem
                                key={index}
                                expenseTitle={expense.expenseTitle}
                                expenseAmount={expense.expenseAmount}
                                expenseDate={expense.expenseDate}
                            />
                })
            }
        </ul>
    );
};

export default ExpensesList;
