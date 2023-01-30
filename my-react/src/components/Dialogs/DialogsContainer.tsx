import {
    DialogsInitialStateType, SendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/DialogsReducer";
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
        updateNewMessageBody : (body: string) => {dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: (body:string) => {dispatch(SendMessageAC(body))}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
