
type initialStateType ={
    userId: null | number,
    email: null | string,
    login: null | string

}

const initialState = {
     userId: null,
    email: null,
    login: null

}
export const authReducer = (state:initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type){
        case 'SET-USER-DATA':
            return {...state, ...action.data}

        default: state
    }
}

const setUserDataAC = (data: { userId: null | number, email: null | string, login: null | string }) => ({type:'SET-USER-DATA', data})
export type ActionsTypes = ReturnType<typeof setUserDataAC>