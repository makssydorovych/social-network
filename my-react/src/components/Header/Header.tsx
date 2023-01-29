import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
type PropsType ={
	isAuth: boolean
	login: string | null
}
const Header = (props: PropsType) => {
	return (
		<header className={s.header}>
			<img  alt="" src='https://res.cloudinary.com/dkombzxne/image/upload/v1637501991/minions_etaiwk.jpg'></img>
			<div>
				{props.isAuth? props.login: <NavLink to={"/login"}>Login</NavLink>}

			</div>
		</header>
	);
};
export default Header;
