

 export const dialogsReducer = (state: any, action: any) =>{
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY': state.newPostBody = action.body;
        return state;
        case 'SEND_MESSAGE' : let body = state.newPostBody;
            state.messages.push({id:6, message: body});
            state.newPostBody = "";
            return state
        default: return state
    }


}
 export const SendMessageAC = () => ({type: 'SEND_MESSAGE'} as const)
 export const updateNewMessageBodyAC = (body: string) =>
     ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body} as const)
export  type SendMessageActionType = ReturnType<typeof SendMessageAC>
export  type ChangeNewPostTextActionType = ReturnType<typeof updateNewMessageBodyAC>