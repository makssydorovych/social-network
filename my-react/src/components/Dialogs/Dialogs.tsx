
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
	ActionsTypes, DialogPageType,
	SendMessageAC,
	updateNewMessageBodyAC
} from "../../redux/store";
import {ChangeEvent} from "react";

type DialogsPropsType = {
	dialogPage: DialogPageType
	dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

	let dialogsElement = props.dialogPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
	let messagesElements = props.dialogPage.messages.map( m => <Message message={m.message} id={m.id}/>)
	let newMessageBody = props.dialogPage.newPostBody;
	let onSendMessageClick = () =>{
	props.dispatch(SendMessageAC())
		props.dispatch(updateNewMessageBodyAC(""))
	}
	let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
		let body = e.currentTarget.value;
		props.dispatch(updateNewMessageBodyAC(body))
	}
	return (
		<div  className={s.dialogs}>
			<div className={s.dialogsItem}>
		{dialogsElement}
		</div>
		<div className={s.messages}>
			<div>{messagesElements}</div>
			<div>
				<div><textarea value={newMessageBody}
							   onChange={onNewMessageChange}
							   placeholder={"Enter yor message"}></textarea></div>
				<div><button onClick={onSendMessageClick}>Send</button></div>
			</div>
		</div>
		</div>
	);
};
export default Dialogs;
