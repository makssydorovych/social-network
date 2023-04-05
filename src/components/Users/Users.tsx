import s from "./Users.module.css";
import { Link } from "react-router-dom";

import { UserType } from "../../types/types";
import {Paginator} from "../00-Common/paginator/Paginator";

type UsersType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    inFollowingProgress: number[];
    users: UserType[];
    onPageChanged: (pageNumber: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
};
export const Users = (props: UsersType) => {
    return (
        <div className={s.pages}>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            {props.users.map((u) => (
                <div key={`${u.id}`} className={s.user_container}>
          <span>
            <img
                src={u.photos.small !== null ? u.photos.small : ""}
                className={s.userPhoto}
                alt={"avatar"}
            />
            <div>
              {u.followed ? (
                  <button
                      onClick={() => {
                          props.unfollow(u.id);
                      }}
                      disabled={props.inFollowingProgress.some((id) => id === u.id)}
                  >
                      Unfollow
                  </button>
              ) : (
                  <button
                      onClick={() => {
                          props.follow(u.id);
                      }}
                      disabled={props.inFollowingProgress.some((id) => id === u.id)}
                  >
                      Follow
                  </button>
              )}
            </div>
          </span>
                    <span>
            <Link to={`/profile/${u.id}`}>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
            </Link>
          </span>
                </div>
            ))}
        </div>
    );
};
