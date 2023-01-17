
export type ActionsTypes = SendMessageActionType | ChangeNewPostTextActionType ;
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
const initialState = {
        messages: [
            {id: 1, message: "Hello WORLD!!!!!"},
            {id: 2, message: "hello World"},
            {id: 3, message: "hellodxxsxs"},
            {id: 4, message: "lorem ispum dolor"},

        ] as Array<MessageType>,
    dialogs: [
            {id: 1, name: "Maksym"},
            {id: 2, name: "Maksym2"},
            {id: 3, name: "Maksym3"},
            {id: 4, name: "elf"},

        ] as Array<DialogType>,
        newMessageBody: ""


}
export type DialogsInitialStateType = typeof initialState
 export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionsTypes): DialogsInitialStateType  =>{
     let copyState = {
         ...state
     }
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY': copyState.newMessageBody = action.body;
        return copyState;
        case 'SEND_MESSAGE' : let body = copyState.newMessageBody;
            copyState.messages.push({id:6, message: body});
            copyState.newMessageBody = "";
            return copyState
        default: return state
    }


}
 export const SendMessageAC = (body: string) => ({type: 'SEND_MESSAGE',body: body} as const)
 export const updateNewMessageBodyAC = (body: string) =>
     ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body} as const)
export  type SendMessageActionType = ReturnType<typeof SendMessageAC>
export  type ChangeNewPostTextActionType = ReturnType<typeof updateNewMessageBodyAC>