import Card from "../Reuseable/Card";
import Classes from './UserDataList.module.css';

const UserDataList = (props) => {

	let displayData = props.data.map((user) => {
		return (
			<div className={Classes.card} key={Math.floor(Math.random() * 100 + 1)}>
				<Card name={user.name} age={user.age} />
			</div>
		);
	});

	if (props.data.length === 0) {
		displayData = "No User Data Found";
	}

	return <div className={Classes.container}>{displayData}</div>;
};

export default UserDataList;
