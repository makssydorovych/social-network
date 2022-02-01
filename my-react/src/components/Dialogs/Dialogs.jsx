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
	let dialogsData = [
		{ id: 1, name: "Maksym" },
		{ id: 2, name: "Maksym2" },
		{ id: 3, name: "Maksym3" },
		{ id: 4, name: "elf" },
		
	]
	;let messagesData = [
		{ id: 1, message: "Hello WORLD!!!!!" },
		{ id: 2, message: "hello World" },
		{ id: 3, message: "hellodxxsxs" },
		{ id: 4, message: "lorem ispum dolor" },
		
	];
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} id={messagesData[0].id}/>
				<Message message={messagesData[1].message} id={messagesData[1].id}/>
				<Message message={messagesData[2].message} id={messagesData[2].id}/>
				<Message message={messagesData[3].message} id={messagesData[3].id}/>
			</div>
		</div>
	);
};
export default Dialogs;
