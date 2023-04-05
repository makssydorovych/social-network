import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import css from './Nav.module.scss';
import {FaMusic, FaRegArrowAltCircleLeft, FaUser, FaVideo} from 'react-icons/fa';

type NavType = {
    logoutTC: () => void;
    id: number;
};
export const Nav = (props: NavType) => {
    const [showMenu, setShowMenu] = useState(false);
    const cssMenu = showMenu ? css.showMenu : '';
    const activeMenu = showMenu ? css.activeMenu : '';

    const showMenuHandler = () => {
        setShowMenu(!showMenu);
    };

    const logoutHandler = () => {
        props.logoutTC();
    };
    return (
        <div onBlur={() => setShowMenu(false)} onClick={showMenuHandler} className={`${css.menuButton} ${activeMenu}`}>
            <div className={css.menuIcon}></div>
            <ul className={`${css.menu} ${cssMenu}`}>
                <NavLink to={'/profile/' + props.id}>
                    <li className={css.menuItem}>
            <span>
              <FaUser/>
            </span>
                       Profile
                    </li>
                </NavLink>
                <NavLink to={'/video'}>
                    <li className={css.menuItem}>
            <span>
              <FaVideo/>
            </span>
                        Video
                    </li>
                </NavLink>
                <NavLink to={'/music'}>
                    <li className={css.menuItem}>
            <span>
              <FaMusic/>
            </span>
                        Music
                    </li>
                </NavLink>

                <NavLink to={'/users'}>
                    <li className={css.menuItem} onClick={logoutHandler}>
            <span>
              <FaRegArrowAltCircleLeft/>
            </span>
                        Log Out
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};
