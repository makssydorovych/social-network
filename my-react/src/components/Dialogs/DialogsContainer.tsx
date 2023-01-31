import {
    DialogsInitialStateType, actions
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

type mapStateToPropsType ={
    dialogPage: DialogsInitialStateType

}
type mapDispatchToPropsType = {
    sendMessage: (body: string) => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogPage: state.dialogsPage,

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageBody : (body: string) => {dispatch(actions.updateNewMessageBody(body))
        },
        sendMessage: (body:string) => {dispatch(actions.SendMessage(body))}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
