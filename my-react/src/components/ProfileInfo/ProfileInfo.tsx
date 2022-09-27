import s from "./ProfileInfo.module.css";
import React from "react";
const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://res.cloudinary.com/dkombzxne/image/upload/v1653243045/small_11_c44e5e4839.jpg" alt={"image"}></img>
			</div>
			<div className={s.descriptionBlock}>ava + desc</div>
		</div>
	);
};
export default ProfileInfo;
