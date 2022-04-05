import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseItemDate from './ExpenseItemDate';

function ExpenseItem(props) {
    
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseItemDate expenseDate={props.expenseDate}/>
                <div className='expense-item__description'>
                    <h2> {props.expenseTitle} </h2>
                    <div className='expense-item__price'> ${props.expenseAmount} </div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;