import {ActionsTypes, DialogType, MessageType} from "./state";


export const messagesReducer = (state: {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}, action: ActionsTypes) => {

    switch (action.type) {
        case "SEND-MESSAGE":
            const newMessage: MessageType = {
                id: Math.random(),
                message: state.newMessage,
                sender: 'I'
            }
            state.messages.push(newMessage)
            state.newMessage = ''
            return state
        case "UPDATE-NEW-MESSAGE":
            state.newMessage = action.newText
            return state
        default:
            return state;
    }

}

export const sendMessageAC = (newMessage: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessage: newMessage
    } as const
}

export const updateNewMessageAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        newText: newText
    } as const
}


