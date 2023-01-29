type ActionsTypes = FollowActionType | UnfollowActionType | SetCurrentPageActionType |
    SetUsersActionType | SetUsersTotalCountActionType | ToggleIsFetchingActionType;

type UserType = {
    id: number,
    name: string,
    status: string
    
}
const initialState = {
    users: [],

}

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
