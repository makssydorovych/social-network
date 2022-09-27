
// @ts-ignore
import s from "./Dialogs.module.css";
// @ts-ignore
import DialogItem from "./DialogItem/DialogItem.tsx";
// @ts-ignore
import Message from "./Message/Message.tsx";

const Dialogs = (props) => {

	let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
	let messegaesElements = props.messages.map( m => <Message message={m.message}/>)
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
