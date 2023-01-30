import React from "react";
import {Paginator} from "../../common/paginator/Paginator";
import {UserType} from "../../redux/types";
import User from "./User";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: ()=> void
    follow: ()=> void
}

const Users: React.FC<PropsType> = ({
                                        currentPage,
                                        totalUsersCount,
                                        pageSize, onPageChanged, users, ...props
                                    }) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}

                />)
            }
        </div>
    </div>

}


export default Users;
