import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
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
    ]
}

test('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostActionCreator('some text for test')


    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation

    expect(newState.posts.length).toBe(3);
});

test('message of new post should be hahaha', () => {
    // 1. Test data
    let action = addPostActionCreator('hahaha')

    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts[2].message).toBe('hahaha');
});

test('length after deleting should be decremented', () => {
    // 1. Test data
    let action = deletePost(1)

    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length shouldn`t be decremented if id is incorrect', () => {
    // 1. Test data
    let action = deletePost(1000)

    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
});
