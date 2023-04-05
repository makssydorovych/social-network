import {FC} from "react";
import s from "./Dialogs.module.css";
import {Link} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsType} from "./DialogsContainer";

const AddMessageForm: FC<
	InjectedFormProps<NewMessageFormValuesType, PropsType>
	> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder={"New Message"}
					component={"textarea"}
					name={"newMessageBody"}
				/>
			</div>
			<div>
				<button>Send message</button>
			</div>
		</form>
	);
};
const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({
	form: "dialogAddMessageForm",
})(AddMessageForm);




const DialogItem = ({ name, id }: { name: string; id: string }) => (
	<Link to={id} className={s.dialogs_item}>
		{name}
	</Link>
);

const Message = ({ message }: { message: string }) => (
	<div className={s.message}>{message}</div>
);

export const Dialogs: FC<DialogsType> = (props) => {
	const addNewMessage = (values: NewMessageFormValuesType) => {
		props.onSendMessageClick(values.newMessageBody);
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogs_items}>
				{props.dialogs.map((dialog) => (
					<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
				))}
			</div>
			<div className={s.messages}>
				{props.messages.map((message) => (
					<Message message={message.message} key={message.id} />
				))}
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	);
};

//types
type NewMessageFormValuesType = {
	newMessageBody: string;
};
type PropsType = {};
