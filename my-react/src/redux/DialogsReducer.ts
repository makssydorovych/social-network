
const initialState = {
        messages: [
            {id: 1, message: "Hello WORLD!!!!!"},
            {id: 2, message: "hello World"},
            {id: 3, message: "hellodxxsxs"},
            {id: 4, message: "lorem ispum dolor"},

        ],
    dialogs: [
            {id: 1, name: "Maksym"},
            {id: 2, name: "Maksym2"},
            {id: 3, name: "Maksym3"},
            {id: 4, name: "elf"},

        ],
        newPostBody: ""


}
 export const dialogsReducer = (state = initialState, action: any) =>{
     const copyState = {
         ...state
     }
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY': copyState.newPostBody = action.body;
        return copyState;
        case 'SEND_MESSAGE' : let body = copyState.newPostBody;
            copyState.messages.push({id:6, message: body});
            copyState.newPostBody = "";
            return copyState
        default: return state
    }


}
 export const SendMessageAC = () => ({type: 'SEND_MESSAGE'} as const)
 export const updateNewMessageBodyAC = (body: string) =>
     ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body} as const)
export  type SendMessageActionType = ReturnType<typeof SendMessageAC>
export  type ChangeNewPostTextActionType = ReturnType<typeof updateNewMessageBodyAC>