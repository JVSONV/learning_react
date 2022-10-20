import { useState } from "react";
import "../ExpenseForm.css";

function ExpenseName(props) {
	const [titleInput, setTitleInput] = useState("");

	const titleChangeHandler = (e) => {
		setTitleInput(e.target.value);
		props.onNameSubmit({ name: e.target.value, reset: setTitleInput });
	};

	return (
		<div className="new-expense__control">
			<label htmlFor="">Name of Expense:</label>
			<input type="text" onChange={titleChangeHandler} value={titleInput} required/>
		</div>
	);
}

export default ExpenseName;
