
import {
    InitialStateType,
    updateNewMessageBodyAC
} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType, ReduxStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType ={
    dialogPage: InitialStateType
}
type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        dialogPage: {state.dialogPage}
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageBody :
    (body: string) => {dispatch(updateNewMessageBodyAC(body))
        dispatch(updateNewMessageBodyAC(""))}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
