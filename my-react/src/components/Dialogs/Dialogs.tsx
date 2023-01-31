import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsInitialStateType} from "../../redux/dialogs-reducer";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
type PropsType ={
	dialogPage: DialogsInitialStateType
	sendMessage: (newText: string) => void
}
const Dialogs: React.FC<PropsType> = (props) => {
	let state = props.dialogPage
	let dialogsElement = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
	let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id}/>)
	let newMessageBody = state.newMessageBody;
	let addMessage =(values:{newMessageBody: string})=>{
		props.sendMessage(values.newMessageBody)
	}
	let onSendMessageClick = () =>{
		props.sendMessage(newMessageBody);

	}
	return (
		<div  className={s.dialogs}>
			<div className={s.dialogsItem}>
		{dialogsElement}
		</div>
		<div className={s.messages}>
			<div>{messagesElements}</div>

		</div>
			<AddMessageForm onSubmit={addNewMessage} />
		</div>
	);
};
export default Dialogs;
