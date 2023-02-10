import {getAuthUserData} from "./auth-reducer";
import {AppThunkDispatch, InferActionsType} from "./redux-store";

const initialState = {
    initialized: false
}

type ActionTypes = InferActionsType<typeof actions>
type InitialStateType = typeof initialState
export const appReducer = (state = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
};
const actions ={
    initializedSuccess: () => ({type:'APP/INITIALIZED-SUCCESS'} as const)
}

export const initializeApp = ()=>(dispatch:AppThunkDispatch)=>{
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>{
            dispatch(actions.initializedSuccess())
        })
}

