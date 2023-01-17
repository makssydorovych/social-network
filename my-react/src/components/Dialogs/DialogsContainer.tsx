import {
    DialogsInitialStateType, SendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType ={
    dialogPage: DialogsInitialStateType
}
type mapDispatchToPropsType = {
    sendMessage: (body: string) => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogsPage
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
