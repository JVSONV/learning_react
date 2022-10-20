import "./ExpensesList.css";
import ExpenseItem from "../ExpensesItem/ExpenseItem";
import { v4 as uuidv4 } from "uuid";

const ExpensesList = (props) => {
	if (props.filtered.length === 0) {
		return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.filtered.map((item) => (
				<li key={uuidv4()}>
					<ExpenseItem item={item.title} price={item.amount} date={item.date} />
				</li>
			))}
		</ul>
	);
};

export default ExpensesList;
