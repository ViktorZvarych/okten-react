import React, {useState} from 'react';
import {commentsService} from "../../services/comments.service";
import {useForm} from "react-hook-form";
import Comment from "./Comment";

const CreateNewCommentForm = () => {

    const [newComment, setNewComment] = useState(null)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();


    const onSubmit = data => commentsService
        .postNewComment(data)
        .then(({data}) => setNewComment(data))

    // console.log(errors);

    return (
        <>
            <div>
                {
                    newComment
                    &&
                    <>
                        <h2>New Comment:</h2>
                        <Comment comment={newComment}/>
                    </>
                }

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register(
                            "name",
                            {
                                required: `Name is required`,
                                minLength: {
                                    value: 3,
                                    message: 'Min length is 3'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Max length is 80'
                                }
                            }
                        )}
                    />
                    {
                        errors.name
                        &&
                        <span role="alert">{errors.name.message}</span>
                    }
                    <hr/>

                    <input
                        type="text"
                        placeholder="Comment"
                        {...register(
                            "body",
                            {
                                required: 'Comment is required',
                                minLength: {
                                    value: 3,
                                    message: 'Min length is 3'
                                },
                                maxLength: {
                                    value: 300,
                                    message: 'Max length is 300'
                                }
                            }
                        )}
                    />
                    {
                        errors.body
                        &&
                        <span role="alert">{errors.body.message}</span>
                    }
                    <hr/>

                    <input
                        type="text"
                        placeholder="Email"
                        {...register(
                            "email",
                            {
                                required: 'Email is required',
                                minLength: {
                                    value: 5,
                                    message: 'Min length is 5'
                                },
                                pattern: {
                                    value: /^\S+@\S+$/,
                                    message: 'Invalid email'
                                }
                            }
                        )}
                    />
                    {
                        errors.email
                        &&
                        <span role="alert">{errors.email.message}</span>
                    }
                    <hr/>

                    <input type="submit" value='Create New Comment'/>
                </form>
            </div>
        </>

    );
}
export default CreateNewCommentForm;