import { useState } from "react";
import "../ExpenseForm.css";

function PurchaseDate(props) {
	const [dateSubmitted, setDateSubmitted] = useState("");

	const dateChangeHandler = (e) => {
		setDateSubmitted(e.target.value);
		console.log(e.target.value);
		props.onDateSubmit({
			date: e.target.value.replaceAll("-", "/"),
			reset: setDateSubmitted,
		});
	};

	return (
		<div className="new-expense__control">
			<label htmlFor="">Purchase Date:</label>
			<input
				type="date"
				min="2019-01-01"
				max="2022-12-31"
				value={dateSubmitted}
				onChange={dateChangeHandler}
				required
			/>
		</div>
	);
}

export default PurchaseDate;
