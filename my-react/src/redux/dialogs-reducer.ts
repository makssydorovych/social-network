import { v1 } from "uuid";

export const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
let initialState: InitialStateType = {
    messages: [
        { id: v1(), message: "Good morning" },
        { id: v1(), message: "Durling" },
        { id: v1(), message: "How are you" },
        { id: v1(), message: "Hi" },
        { id: v1(), message: "LoliPop" },
    ],
    dialogs: [
        { id: v1(), name: "Mike" },
        { id: v1(), name: "Paul" },
        { id: v1(), name: "Monika" },
        { id: v1(), name: "Alex" },
        { id: v1(), name: "Jack" },
    ],
};

export const dialogsReducer = (
    state: InitialStateType = initialState,
    action: DialogsActionsType
) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = { id: v1(), message: action.newMessageBody };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: "",
            };
        default:
            return state;
    }
};

export const sendNewMessage = (newMessageBody: string) => {
    return {
        type: SEND_NEW_MESSAGE,
        newMessageBody,
    } as const
};

type InitialStateType = {
    messages:
        { id: string, message: string }[]
    dialogs: { id: string, name: string }[]
}
type sendNewMessageType = ReturnType<typeof sendNewMessage>;
export type DialogsActionsType = sendNewMessageType;
