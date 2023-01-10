import s from "../Dialogs.module.css";
import {MessageType} from "../../../redux/store";

const Message = (props: MessageType) => {
	return <div className={s.name}>{props.name}</div>;
};

export default Message;
