import React from "react";
import UserssContainer from "./UsersContainer";
import s from "./users.module.css";

const Users = (props:any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages =[];
    for (let i=1; i < pagesCount; i++) {
        pages.push(i)
    }
return (
    <div>
        <div>
            {pages.map(p => {
                return   <span className={props.currentPage === p && s.selectedPage} onClick={()=>{props.onPageChanged(p)}}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photo.small != null ? u.photo.small : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"}
                                className={s.userPhoto} alt={""}/>
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
)
}


export default Users;
