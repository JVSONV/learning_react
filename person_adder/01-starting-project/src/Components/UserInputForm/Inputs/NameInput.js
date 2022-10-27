import Classes from './NameInput.module.css';

const NameInput = (props) => {

    return (<div>
        <label className={Classes.title} htmlFor="name">Username</label>
        <input className={Classes.name} type="text" name="fName" id="name" onChange={props.onSubmit}/>
    </div>)

}

export default NameInput;