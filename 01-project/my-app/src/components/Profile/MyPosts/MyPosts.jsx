import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let onAddPost = (values) => {
        props.addPost(values.newPost)
    }



    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field component={Textarea}
                           name='newPost'
                           placeholder='Add your post'
                           validate={[required, maxLength10]}
                    />
            </div>
            <div>
                <button>Add Post</button>
            </div>

        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddNewPostForm)

export default MyPosts;