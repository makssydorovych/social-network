import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
	ActionsTypes, DialogPageType
} from "../../redux/store";
import {

	SendMessageAC,
	updateNewMessageBodyAC
} from "../../redux/DialogsReducer";
import {ChangeEvent} from "react";
import {AppRootStateType, ReduxStoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {useSelector} from "react-redux";

type PropsType = {
	store: ReduxStoreType
}

const DialogsContainer = (props: PropsType) => {
	let state = props.store.getState()
	const NewBody = useSelector<AppRootStateType>(state => state.dialogsPage.newPostBody)
	const onSendMessageClick = () =>{
	props.store.dispatch(SendMessageAC())
		props.store.dispatch(updateNewMessageBodyAC(""))
	}
	let onNewMessageChange = (body: string) =>{

		props.store.dispatch(updateNewMessageBodyAC(body))
	}
	return <Dialogs dialogPage={state.dialogsPage} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} newPostBody={NewBody as string}/>

};
export default DialogsContainer;
