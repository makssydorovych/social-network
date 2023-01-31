import React from "react";
import {actions} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogPage: state.dialogsPage,

    }
}
// const DialogsContainer = connect(mapStateToProps, {
//     sendMessage: actions.sendMessage,
//     updateNewMessageBody: actions.updateNewMessageBody
// })(Dialogs);
// export default DialogsContainer;


export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)
