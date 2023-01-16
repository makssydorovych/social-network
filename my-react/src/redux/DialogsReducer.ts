import {ActionsTypes} from "./store";
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
export type InitialStateType = typeof initialState
 export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType  =>{
     const copyState = {
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
 export const SendMessageAC = () => ({type: 'SEND_MESSAGE'} as const)
 export const updateNewMessageBodyAC = (body: string) =>
     ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body} as const)
export  type SendMessageActionType = ReturnType<typeof SendMessageAC>
export  type ChangeNewPostTextActionType = ReturnType<typeof updateNewMessageBodyAC>