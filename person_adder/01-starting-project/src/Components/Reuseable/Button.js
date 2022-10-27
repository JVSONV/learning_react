import Classes from "./Button.module.css";

const Button = (props) => {
	if (props.bType === "button") {
		return (
			<button
				className={Classes.submit}
				type={props.bType}
				onClick={props.onClickHandler}
			>
				{props.innerText}
			</button>
		);
	}

	return (
		<button className={Classes.submit} type={props.bType}>
			{props.innerText}
		</button>
	);
};

export default Button;
