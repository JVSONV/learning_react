import Classes from './Card.module.css';

const Card = (props) => {
	return (
		<h1 className={Classes.user}>{`${props.name} (${props.age} ${
			props.age > 1 ? "years old" : "year old"
		})`}</h1>
	);
};

export default Card;
