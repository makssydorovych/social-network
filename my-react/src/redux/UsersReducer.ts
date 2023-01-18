type ActionsTypes = FollowActionType | UnfollowActionType | SetCurrentPageActionType |
    SetUsersActionType | SetUsersTotalCountActionType | ToggleIsFetchingActionType;

export type UserType = {
    id: number,
    photo : {
        small: any,
        large: any
    };
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}
const initialState = {
    users: [
        {
            id: 1,
            photo: {small:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"},
            followed: true,
            fullName: "Hello",
            status: "status",
            location: {city: "city", country: "country"}
        },
        {
            id: 2,
            photo: {small:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"},
            followed: true,
            fullName: "Hello",
            status: "status",
            location: {city: "city", country: "country"}
        },
        {
            id: 3,
            photo: {small:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"},
            followed: false,
            fullName: "Hello",
            status: "status",
            location: {city: "city", country: "country"}
        },
        {
            id: 4,
            photo: {small:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png"},
            followed: false,
            fullName: "Hello",
            status: "status",
            location: {city: "city", country: "country"}
        },



    ] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    totalCount: 0,
    isFetching: false

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
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT' :
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING' :
            return {...state, isFetching: action.isFetching}
        default:
            return state

    }
}
export const follow = (userId: number) => {
    return {
        type: 'FOLLOW', userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW', userId
    } as const
}
export const setUsers = (users: any) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export const setCurrentPage = (currentPage: any) => {
    return {
        type: 'SET-CURRENT-PAGE', currentPage
    } as const
}
export const setUsersTotalCount = (totalCount: any) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT', totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING', isFetching
    } as const
}
export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetUsersTotalCountActionType = ReturnType<typeof setUsersTotalCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
