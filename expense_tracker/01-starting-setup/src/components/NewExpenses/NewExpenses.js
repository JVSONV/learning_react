import {useState} from 'react';
import "./NewExpenses.css";
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
	
	const [formDisplayed, setFormDisplayed] = useState(false);


	const expenseAddedHandler = (addedExpenseData) => {
		const newExpenseItem = {
			...addedExpenseData,
		};
		props.onUpdateExpense(newExpenseItem);
	};

	const changeDisplayedStepHandler = () => {
		setFormDisplayed(true);
	};

	const removeStepHandler = ()=> {
		setFormDisplayed(false);
	}

	return (
		<div className="new-expense">
			{!formDisplayed && <button onClick={changeDisplayedStepHandler}>Add New Expense</button>}
			{formDisplayed && <ExpenseForm onExpenseAdded={expenseAddedHandler} onRemoveStep={removeStepHandler}/>}
		</div>
	);
}

export default NewExpense;
