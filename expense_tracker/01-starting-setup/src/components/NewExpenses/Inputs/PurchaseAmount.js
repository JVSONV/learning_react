import { useState } from "react";
import "../ExpenseForm.css";

function PurchaseAmount(props) {
	const [inputAmount, setInputAmount] = useState("");

	const onReset = () => {
		setInputAmount("");
	};

	const amountChangeHandler = (e) => {
		setInputAmount(e.target.value);
		props.onAmountSubmit({
			amount: e.target.value,
			reset: onReset,
		});
	};

	return (
		<div className="new-expense__control">
			<label htmlFor="">Purchase Amount:</label>
			<input
				type="number"
				min="0.01"
				step="0.01"
				value={inputAmount}
				onChange={amountChangeHandler}
				required
			/>
		</div>
	);
}

export default PurchaseAmount;
