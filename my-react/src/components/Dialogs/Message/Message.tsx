import s from "../Dialogs.module.css";

type PropsType ={
	message: string
	id: number
}
const Message = (props: PropsType) => {
	return <div className={s.name} key={props.id}>{props.message}</div>;
};

export default Message;
