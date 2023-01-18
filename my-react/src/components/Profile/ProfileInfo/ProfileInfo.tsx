import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../../common/preloader/Preloader";
const ProfileInfo = (props:any) => {
	if(!props.profile){
		return <Preloader/>
	}
	return (
		<div>
			<div>
				<img src="https://res.cloudinary.com/dkombzxne/image/upload/v1653243045/small_11_c44e5e4839.jpg" alt={"image"}></img>
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large}/>
				</div>
		</div>
	);
};
export default ProfileInfo;
