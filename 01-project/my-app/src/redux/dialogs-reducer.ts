import {InferActionsTypes} from "./redux-store";


type DialogType = {
    id: number
    name: string,
    img: string
}

type MessageType = {
    id: number
    message: string,
}

let initialState = {
    messages: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How is your React'
        },
        {
            id: 3,
            message: 'Yo'
        },
        {
            id: 4,
            message: 'Fuck this pdl'
        },
        {
            id: 5,
            message: 'The last one'
        },
    ] as Array<MessageType>,
    dialogs: [
        {
            id: 1,
            name: 'Iaroslav',
            img: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg'
        },
        {
            id: 2,
            name: 'Vadim',
            img: 'https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg'
        },
        {
            id: 3,
            name: 'Vasya',
            img: 'https://aldf.org/wp-content/uploads/2021/10/GettyImages-141467674-crop.jpg'
        },
        {
            id: 4,
            name: 'Kris',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9qJ88bo1jA3LvW1aqGyf09foClZ--lOlzVGRl1CUJKe8cIfhCxBKblwUopc6um8seqA&usqp=CAU'
        },
        {
            id: 5,
            name: 'Serj',
            img: 'https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg'
        },
    ] as Array<DialogType>,
}


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state;
    }
}


export const actions = {
    sendMessage: (newMessageBody: string) => ({
        type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody
    } as const)
}



export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>