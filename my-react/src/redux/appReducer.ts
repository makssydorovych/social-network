import {getAuthUserData} from "./auth-reducer";
import {InferActionsType} from "./redux-store";

const initialState = {
    initialized: false
}

type ActionTypes = InferActionsType<typeof actions>
type InitialStateType = typeof initialState
const appReducer = (state = initialState, action: ActionTypes):InitialStateType => {
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
    initializedSuccess: () => ({type:'APP/INITIALIZED-SUCCESS', a:"aaa"} as const)
}



export const initializeApp = ()=>(dispatch:any)=>{
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>{
            dispatch(actions.initializedSuccess())
        })
}

export default appReducer;