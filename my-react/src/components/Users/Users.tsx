import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css";
import {UserType} from "../../redux/UsersReducer";
import  axios from 'axios';
const Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if(props.usersPage.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce  =>{
                props.setUsers(responce.data.items)
                console.log(responce)
            });

        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photo.small != null ? u.photo.small: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png" } className={s.userPhoto} alt={""}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span><div>{u.fullName}</div><div>{u.status}</div></span>
                        <span><div>{u.location.country}</div><div>{u.location.city}</div></span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;