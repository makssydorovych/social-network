
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";

const Dialogs = (props: DialogPageType) => {

	let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
	let messegesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>)
	let onSendMessageClick = () =>{

	}
	return (
		<div  className={s.dialogs}>
			<div className={s.dialogsItem}>
		{dialogsElement}
		</div>
		<div className={s.messages}>
			<div>{messegesElements}</div>
			<div>
				<div><textarea placeholder={"Enter yor message"}></textarea></div>
				<div><button onClick={onSendMessageClick}>Send</button></div>
			</div>
		</div>
		</div>
	);
};
export default Dialogs;
