import React from "react";
import {actions} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    };
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(actions.sendMessage(newMessageBody));
        },
    };
};

type mapStateToPropsType = {
    isAuth: boolean;
    dialogs: { id: string; name: string }[];
    messages: { id: string; message: string }[];
};
type mapDispatchToPropsType = {
    onSendMessageClick: (newMessageBody: string) => void;
};
export type DialogsType = mapDispatchToPropsType & mapStateToPropsType;


const  DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)

export default DialogsContainer