import "./ExpenseForm.css";
import {useState} from 'react';

function ExpenseForm(props) {

    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     inputTitle : "",
    //     inputAmount : "",
    //     inputDate : ""
    // });

    function changeTitleHandler(event) {
        setInputTitle(event.target.value);

        // setUserInput({
        //   ...userInput,
        //   inputTitle: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, inputTitle : event.target.value }
        // });
    }

    function changeAmountHandler(event) {
        setInputAmount(event.target.value);

        // setUserInput({
        //   ...userInput,
        //   inputAmount: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, inputAmount : event.target.value }
        // });
    }

    function changeDateHandler(event) {
        setInputDate(event.target.value);

        // setUserInput({
        //   ...userInput,
        //   inputDate: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, inputDate : event.target.value }
        // });
    }

    function inputSubmitHandler(event) {
        event.preventDefault();
        const expenseData = {
            expenseTitle : inputTitle,
            expenseAmount : +inputAmount,
            expenseDate : new Date(inputDate)
        }
        props.onSaveExpenseData(expenseData);
        setInputTitle("");
        setInputAmount("");
        setInputDate("");
    }

    function cancelHandler() {
        props.onCancel(false);
    }

    return (
        <form onSubmit={inputSubmitHandler}>
            <div className="new-expense__controls">
                <div  className="new-expense__control">
                    <label> Title </label>
                    <input type="text" value={inputTitle} onChange={changeTitleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number" value={inputAmount} min="0.01" step="0.01" onChange={changeAmountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Date </label>
                    <input type="date" value={inputDate} min="2019-01-01" max="2022-12-31" onChange={changeDateHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <div className="new-expense__action">
                    <button onClick={cancelHandler}> Cancel </button>
                </div>

                <div className="new-expense__action">
                    <button type="submit"> Add Expense </button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;