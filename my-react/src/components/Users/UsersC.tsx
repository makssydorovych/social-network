import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css";
import axios from 'axios';
import {AppStateType} from "../../redux/redux-store";


class Users extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setTotalUsersCount(responce.data.totalCount)
        });
    }
    onPageChanged = (currentPage: any) => {
    this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages =[];
        for (let i=1; i < pagesCount; i++) {
            pages.push(i)
        }
        return (

            <div>
                <div>
                     {pages.map(p => {
                     return   <span className={this.props.currentPage === p && s.selectedPage} onClick={()=>{this.onPageChanged(p)}}>{p}</span>
                    })}

                    </div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photo.small != null ? u.photo.small : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"}
                                className={s.userPhoto} alt={""}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;