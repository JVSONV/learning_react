import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
	const [filterSelected, setFilterSelected] = useState("All");

	const filterSelectionHandler = (selectedYear) => {
		setFilterSelected(selectedYear);
	};

	const filteredData =
		filterSelected === "All"
			? props.data
			: props.data.filter(
					(expense) => expense.date.getFullYear().toString() === filterSelected
			);

	return (
		<div className="expenses">
			<ExpenseFilter
				selected={filterSelected}
				onFilterData={filterSelectionHandler}
			/>
			<ExpenseChart expenses={filteredData}/>
			<ExpensesList data={props.data} filtered={filteredData}/>
		</div>
	);
}

export default Expenses;
