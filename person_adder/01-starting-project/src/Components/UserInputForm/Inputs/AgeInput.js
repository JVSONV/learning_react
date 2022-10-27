import Classes from './AgeInput.module.css'

const AgeInput = (props) => {
	return (
		<div>
			<label className={Classes.title} htmlFor="age">Age (Years)</label>
			<input className={Classes.age}
				type="number"
				name="userage"
				id="age"
				onChange={props.onSubmit}
			/>
		</div>
	);
};

export default AgeInput;
