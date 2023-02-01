import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";
type PropsType ={
	id: number,
	name: string
}

const DialogItem = (props: PropsType )=> {
	let path = "/dialogs" + props.id;
	return (
		<div key={props.id} className={s.dialog + " " + s.active} >
			<NavLink to={path}>{props.name}</NavLink>

		</div>
	);
};

export default DialogItem;
