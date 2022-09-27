import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
type PropsType = {
	friends: Array<friends>

}
type friends = {
	id: number
	name: string
}
const Navbar = (props: PropsType) => {
	return (
		<nav className={s.nav}>
			<div className={`${s.item}`}>
				<NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs'className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news'>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music'>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/settings'>Settings</NavLink>
				
			</div>
			<h3>Friends:</h3>
			{props.friends.map(friend => {
			return(
				<div key={friend.id}>{friend.name}</div>
			)
		})}

		</nav>
	);
};
export default Navbar;
