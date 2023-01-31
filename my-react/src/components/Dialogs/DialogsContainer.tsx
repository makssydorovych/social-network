import {
    actions
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {AppRootStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogPage: state.dialogsPage,

    }
}
const DialogsContainer = connect(mapStateToProps, {
    sendMessage: actions.sendMessage,
    updateNewMessageBody: actions.updateNewMessageBody
})(Dialogs);
export default DialogsContainer;
