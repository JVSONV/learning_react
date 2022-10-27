import { useState } from "react";
import Classes from "./UserInputForm.module.css";
import NameInput from "./Inputs/NameInput";
import AgeInput from "./Inputs/AgeInput";
import Button from "../Reuseable/Button";

const UserInputForm = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [userAge, setUserAge] = useState("");

	const formSubmitHandler = (e) => {
		e.preventDefault();
		let checked = props.onErrorChecked({
			name: e.target.name.value,
			age: e.target.age.value,
		});

		if (!checked) {
			props.onFormData({ name: e.target.name.value, age: e.target.age.value });
			setEnteredName("");
			setUserAge("");
			e.target.reset();
		}
	};

	const enteredNameHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const ageValueHandler = (e) => {
		setUserAge(e.target.value);
	};

	return (
		<div className={Classes.container}>
			<form onSubmit={formSubmitHandler}>
				<NameInput onSubmit={enteredNameHandler} value={enteredName} />
				<AgeInput onSubmit={ageValueHandler} value={userAge} />
				<Button innerText={"Add User"} bType="submit" />
			</form>
		</div>
	);
};

export default UserInputForm;
