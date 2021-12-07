const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ],
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
    ],
    newMessageBody: '',
}

// const dialogsReducer = (state = initialState, action) => {
//
//     switch (action.type) {
//         case UPDATE_NEW_MESSAGE_BODY:
//             state.newMessageBody = action.body;
//             return state;
//         case SEND_MESSAGE:
//             let body = state.newMessageBody;
//             state.newMessageBody = '';
//             state.messages.push({id: 6, message: body})
//             return state;
//         default:
//             return state;
//     }
// }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state;
    }
}




export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;