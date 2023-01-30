import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ChangeEvent} from "react";
import {DialogsPropsType} from "./DialogsContainer";
import {useNavigate} from "react-router-dom";


const Dialogs = (props: DialogsPropsType) => {
	let state = props.dialogPage
	let dialogsElement = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
	let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id}/>)
	let newMessageBody = state.newMessageBody;
	let onSendMessageClick = () =>{
		props.sendMessage(newMessageBody);

	}
	let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
		let body = e.currentTarget.value;
		props.updateNewMessageBody(body);
	}
	const navigate = useNavigate()
	if(!props.isAuth) return navigate("/login")
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
