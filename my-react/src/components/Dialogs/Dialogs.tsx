
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";

const Dialogs = (props: DialogPageType) => {

	let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
	let messegaesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>)
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
