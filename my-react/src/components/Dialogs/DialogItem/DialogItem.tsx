import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";
import {DialogType} from "../../../redux/store";
const DialogItem = (props: DialogType )=> {
	let path = "/dialogs" + props.id;
	return (
		<div key={props.id} className={s.dialog + " " + s.active} >
			<NavLink to={path}>{props.name}</NavLink>

		</div>
	);
};

export default DialogItem;
