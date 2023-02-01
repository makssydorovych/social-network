import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
type PropsType ={
	isAuth: boolean
	login: string | null
	logout: ()=>void
}
export const Header = (props: PropsType) => {
	return (
		<header className={s.header}>
			<img src={logo} alt="logo" />

			<div className={s.loginBlock}>
				{props.isAuth ? (
					<div className={s.item}>
						{props.login} - <button onClick={props.logout}>Logout</button>
					</div>
				) : (
					<NavLink to={"/login"} className={s.item}>
						Login
					</NavLink>
				)}
			</div>
		</header>
	);
};
