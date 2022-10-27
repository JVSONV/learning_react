import { useState } from "react";
import { useRef } from "react";
import Classes from "./App.module.css";
import UserInputForm from "./Components/UserInputForm/UserInputForm";
import UserDataList from "./Components/UserDataList/UserDataList";
import Button from "./Components/Reuseable/Button";

const userData = [];

function App() {
	const [updatedData, setUpdatedData] = useState(userData);
	const [inputsChecked, setInputsChecked] = useState(false);
	const [errorOutput, setErrorOutput] = useState("");
	let modal = useRef(null);
	const [modalshow, setModalShow] = useState(modal)

	let error = inputsChecked;

	const formDataHandler = (data) => {
		setUpdatedData((previous) => {
			return [data, ...previous];
		});
	};

	const clickHandler = () => {
		setInputsChecked(false);
		setErrorOutput("");
	};

	const errorCheckedHandler = ({ name, age }) => {
		if (age <= 0 && name.length <= 0) {
			error = true;
			setErrorOutput(
				<dialog className={Classes.error} ref={modal}>
					<h3>Invalid input</h3>
					<p>Please enter a valid name and age (non-empty values).</p>
					<Button
						innerText={"Okay"}
						bType={"button"}
						onClickHandler={clickHandler}
					/>
				</dialog>
			);
			modal.current.showModal();
		} else if (age <= 0) {
			error = true;
			setErrorOutput(
				<dialog className={Classes.error} ref={modal}>
					<h3>Invalid input</h3>
					<p>Please enter a valid age (age > 0 ).</p>
					<Button
						innerText={"Okay"}
						bType={"button"}
						onClickHandler={clickHandler}
					/>
				</dialog>
			);
			modal.current.showModal();
		} else if (name.length <= 1) {
			error = true;
			setErrorOutput(
				<dialog className={Classes.error} ref={modal}>
					<h3>Invalid input</h3>
					<p>Please enter a valid name (length > 1).</p>
					<Button
						innerText={"Okay"}
						bType={"button"}
						onClickHandler={clickHandler}
					/>
				</dialog>
			);
			modal.current.showModal();
		}

		if (error) {
			setInputsChecked(true);
		}
		return {check: error, element: modal};
	};
	return (
		<div className={`${Classes.body}`}>
			<div className={Classes.container}>
				<UserInputForm
					onFormData={formDataHandler}
					onErrorChecked={errorCheckedHandler}
					modal={errorOutput}
				/>
				<UserDataList data={updatedData} />
				{errorOutput};
			</div>
		</div>
	);
}

export default App;
