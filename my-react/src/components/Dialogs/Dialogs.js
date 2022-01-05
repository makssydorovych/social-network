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
	];
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
			</div>
			<div className={s.messages}>
				<Message message='hello' />
				<Message message='hello World' />
				<Message message='hellodxxsxs' />
				<Message message='hello1' />
			</div>
		</div>
	);
};
export default Dialogs;
