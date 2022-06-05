import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
		<div className={s.messages}>
		{messegaesElements}</div>
		</div>
	);
};
export default Dialogs;
