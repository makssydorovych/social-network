import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
	DialogPageType
} from "../../redux/store";
import {ChangeEvent} from "react";
import {DialogsPropsType} from "./DialogsContainer";
// type PropsType = {
// 	dialogPage: DialogPageType
// 	updateNewMessageBody: (body: string) => void
// 	sendMessage: () => void
// 	newPostBody: string
// }

const Dialogs = (props: DialogsPropsType) => {
	let state = props.dialogPage
	let dialogsElement = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
	let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id}/>)
	let newMessageBody = state.newPostBody;
	let onSendMessageClick = () =>{
		// props.sendMessage();
		props.updateNewMessageBody("")
	}
	let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
		let body = e.currentTarget.value;
		props.updateNewMessageBody(body);
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
