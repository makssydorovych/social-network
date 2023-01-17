type ActionsTypes = FollowActionType | UnfollowActionType |
    SetUsersActionType;
export type UserType = {
    id: number
    photoUrl: string,
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}
const initialState = {
    users: [
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
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png",
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

};
export type UsersInitialStateType = typeof initialState
export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsTypes): UsersInitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET-USERS' :
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state

    }
}
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW', userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW', userId
    } as const
}
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>
