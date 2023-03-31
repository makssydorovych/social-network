import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendNewMessage } from "../../redux/dialogs-reducer";
import { compose } from "redux";
import { AppDispatch, AppRootStateType } from "../../redux/redux-store";

const mptp = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    };
};
const mdtp = (dispatch: AppDispatch) => {
    return {
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(sendNewMessage(newMessageBody));
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


const  DialogsContainer = compose<React.ComponentType>(connect(mptp, mdtp), withAuthRedirect)(Dialogs)

export default DialogsContainer
