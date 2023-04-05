import React, { useEffect } from 'react';
import css from './ProfileWidget.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getMyProfileTC } from '../../../redux/myProfile-reducer';
import { NavLink } from 'react-router-dom';
import { editProfileAC } from '../../../redux/profile-reducer';
import { FaMusic, FaRegComment, FaRegComments, FaRegSun, FaRegUserCircle, FaUsers, FaVideo } from 'react-icons/fa';
import avaNeo from '../../../assets/images/avaNeo.png';
import { PreloaderSmall } from '../../00-Common/PreloaderSmall/PreloaderSmall';

type ProfileWidgetType = {};

export const ProfileWidget: React.FC<ProfileWidgetType> = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(state => state.myProfile.myProfile.fullName);
  const avatar = useAppSelector(state => state.myProfile.myProfile.photos);
  const id = useAppSelector(state => state.myProfile.myProfile.userId);
  const userId = useAppSelector(state => state.auth.data.id);

  const editFalseHandler = () => {
    dispatch(editProfileAC(false));
  };

  useEffect(() => {
    dispatch(getMyProfileTC());
  }, [dispatch]);
  if (!avatar) {
    return <PreloaderSmall />; //если нет профайла то крутилка
  }

  return (
    <div className={css.sideProfile}>
      <div className={css.profileCover}></div>
      <div className={css.profileContent}>
        <NavLink to={'/profile/' + id}>
          <div className={css.profileBlock}>
            <img className={css.ava} src={avatar.small != null ? avatar.small : avaNeo} alt="ava" />
            <h3 className={css.name}>{name}</h3>
          </div>
        </NavLink>

        <ul className={css.profileMenu}>
          <h3>My Profile</h3>
          <NavLink to={'/profile/' + id}>
            <li onClick={editFalseHandler}>
              <span>
                <FaRegUserCircle />{' '}
              </span>{' '}
              Profile
            </li>
          </NavLink>
          <NavLink onClick={() => dispatch(editProfileAC(true))} to={'/profile/' + id}>
            <li onClick={editFalseHandler}>
              <span>
                <FaRegSun />{' '}
              </span>{' '}
              Edit Profile
            </li>
          </NavLink>
          {userId && (
            <NavLink to={'/music'}>
              <li>
                <span>
                  <FaMusic />{' '}
                </span>
                Music
              </li>
            </NavLink>
          )}
          {userId && (
            <NavLink to="/video">
              <li>
                <span>
                  <FaVideo />
                </span>
                Video
              </li>
            </NavLink>
          )}
        </ul>

        <ul className={css.profileMenu}>
          <h3>Community</h3>

          <NavLink to="/users">
            <li>
              <span>
                <FaUsers />
              </span>
              Users
            </li>
          </NavLink>
          <NavLink to="/dialogs">
            <li>
              <span>
                <FaRegComment />
              </span>
              Dialogs
            </li>
          </NavLink>
          <NavLink to="/chat">
            <li>
              <span>
                <FaRegComments />
              </span>
              Common Chat
            </li>
          </NavLink>
          {/*<li style={{cursor: "pointer"}} onClick={logoutHandler}><span><FaRegArrowAltCircleLeft/></span>Log*/}
          {/*    Out*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  );
};
