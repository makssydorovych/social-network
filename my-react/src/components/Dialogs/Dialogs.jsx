import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
const DialogItem = props => {
	let path = "/dialogs" + props.id;
	return (
		<div className={s.dialog + " " + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};
const Message = props => {
	return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
	let dialogs = [
		{ id: 1, name: "Maksym" },
		{ id: 2, name: "Maksym2" },
		{ id: 3, name: "Maksym3" },
		{ id: 4, name: "elf" },
		
	];
	let messages = [
		{ id: 1, message: "Hello WORLD!!!!!" },
		{ id: 2, message: "hello World" },
		{ id: 3, message: "hellodxxsxs" },
		{ id: 4, message: "lorem ispum dolor" },
		
	];
	let dialogsElement = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
	
	let messegaesElements = messages.map( m => <Message message={m.message}/>)
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
		{dialogsElement}
		</div>
		<div className={s.messages}></div>
		{messegaesElements}
		</div>
	);
};
export default Dialogs;
