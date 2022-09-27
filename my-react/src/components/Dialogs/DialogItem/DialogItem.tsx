import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";
import {DialogType} from "../../../redux/state";
const DialogItem = (props: DialogType )=> {
	let path = "/dialogs" + props.id;
	return (
		<div className={s.dialog + " " + s.active}>
			<NavLink to={path}>{props.name}</NavLink>

		</div>
	);
};

export default DialogItem;
