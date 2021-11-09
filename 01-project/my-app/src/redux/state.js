import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Its my first post',
                    likesCount: 14,
                },
                {
                    id: 2,
                    message: 'My first react app',
                    likesCount: 23,
                },
            ],
            newPostText: 'react project'

        },
        dialogsPage: {
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
        },
        sidebar: ''
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;  //pattern observer
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}







export default store;

window.store = store;