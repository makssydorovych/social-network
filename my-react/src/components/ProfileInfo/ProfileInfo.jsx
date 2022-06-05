import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://res.cloudinary.com/dkombzxne/image/upload/v1653243045/small_11_c44e5e4839.jpg"></img>
			</div>
			<div className={s.descriptionBlock}>ava + desc</div>
		</div>
	);
};
export default ProfileInfo;
