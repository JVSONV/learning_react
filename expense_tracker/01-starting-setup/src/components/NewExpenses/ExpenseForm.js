import "./ExpenseForm.css";
import ExpenseName from "./Inputs/ExpenseName";
import PurchaseAmount from "./Inputs/PurchaseAmount";
import PurchaseDate from "./Inputs/PurchaseDate";

const newExpenseData = {
	title: "",
	amount: "",
	date: "",
};

const resetCalls = {
	nameReset: "",
	amountReset: "",
	dateReset: "",
};

function ExpenseForm(props) {
	function nameSubmitHandler(expenseName) {
		newExpenseData.title = expenseName.name;
		resetCalls.nameReset = expenseName.reset;
	}

	function amountSubmitHandler(purchaseValue) {
		newExpenseData.amount = purchaseValue.amount;
		resetCalls.amountReset = purchaseValue.reset;
	}

	function dateSubmitHandler(purchaseDate) {
		console.log(purchaseDate)
		newExpenseData.date = new Date (purchaseDate.date);
		console.log(newExpenseData.date)
		resetCalls.dateReset = purchaseDate.reset;
	}

	function inputReset(cb) {
		cb("");
	}

	const submitHandler = (e) => {
		e.preventDefault();
		props.onExpenseAdded(newExpenseData);
		props.onRemoveStep();
		

		inputReset(resetCalls.nameReset);
		inputReset(resetCalls.amountReset);
		inputReset(resetCalls.dateReset);
	};

	return (
		<form action="" onSubmit={submitHandler} value="submitted">
			<div className="new-expense__controls">
				<ExpenseName onNameSubmit={nameSubmitHandler} />
				<PurchaseAmount onAmountSubmit={amountSubmitHandler} />
				<PurchaseDate onDateSubmit={dateSubmitHandler} />
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onRemoveStep}>
					Cancel
				</button>
				<button type="submit">
					Add Expense
				</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
