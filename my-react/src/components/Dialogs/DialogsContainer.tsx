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
import {AppRootStateType, ReduxStoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import StoreContext from "../../StoreContext";



const DialogsContainer = () => {
	const dispatch = useDispatch()
    const NewBody = useSelector<AppRootStateType>(state => state.dialogsPage.newPostBody)

    return <StoreContext.Consumer>
        {
            (store) => {
				let state = store.getState()
				const onSendMessageClick = () => {
					dispatch(SendMessageAC())
					dispatch(updateNewMessageBodyAC(""))
				}
				let onNewMessageChange = (body: string) => {

					dispatch(updateNewMessageBodyAC(body))
				}
                return <Dialogs dialogPage={state.dialogsPage} updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick} newPostBody={NewBody as string}/>
            }}
    </StoreContext.Consumer>
};
export default DialogsContainer;
