import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
const Header = () => {
	return (
		<header className={s.header}>
			<img  alt="" src='https://res.cloudinary.com/dkombzxne/image/upload/v1637501991/minions_etaiwk.jpg'></img>
			<div>
				<NavLink to={"/login"}>Login</NavLink>
			</div>
		</header>
	);
};
export default Header;
