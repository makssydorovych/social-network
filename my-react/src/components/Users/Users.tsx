import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css";
import {UserType} from "../../redux/UsersReducer";

const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png",
                    followed: true,
                    fullName: "Hello",
                    status: "status",
                    location: {city: "city", country: "country"}
                },
                {
                    id: 2,
                    photoUrl: "hhttps://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png",
                    followed: true,
                    fullName: "Hello",
                    status: "status",
                    location: {city: "city", country: "country"}
                },
                {
                    id: 3,
                    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png",
                    followed: false,
                    fullName: "Hello",
                    status: "status",
                    location: {city: "city", country: "country"}
                },
                {
                    id: 4,
                    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png",
                    followed: false,
                    fullName: "Hello",
                    status: "status",
                    location: {city: "city", country: "country"}
                },

            ] as Array<UserType>,
        )
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
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