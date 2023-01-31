import {
    DialogsInitialStateType, SendMessage,
    updateNewMessageBody
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

type mapStateToPropsType ={
    dialogPage: DialogsInitialStateType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    sendMessage: (body: string) => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageBody : (body: string) => {dispatch(updateNewMessageBody(body))
        },
        sendMessage: (body:string) => {dispatch(SendMessage(body))}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
