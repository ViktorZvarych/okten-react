import React, {useState} from 'react';

import {usersService} from "../../services/users.service";
import {useForm} from "react-hook-form";
import User from "./User";

const CreateNewUserForm = () => {

    const [newUser, setNewUser] = useState(null)

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();


    const onSubmit = data => usersService
        .postNewUser(data)
        .then(({data}) => setNewUser(data))
        .then(()=>reset())

    return (
        <>
            <div>
                {
                    newUser
                    &&
                    <>
                        <h2>New User:</h2>
                        <User user={newUser}/>
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
                                    message: 'Max length is 50'
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
                        placeholder="Username"
                        {...register(
                            "username",
                            {
                                required: 'Username is required',
                                minLength: {
                                    value: 3,
                                    message: 'Min length is 3'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Max length is 30'
                                }
                            }
                        )}
                    />
                    {
                        errors.username
                        &&
                        <span role="alert">{errors.username.message}</span>
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

                    <fieldset>
                        <legend>Address</legend>

                        <input
                            type="text"
                            placeholder="Street"
                            {...register(
                                "address.street"
                            )}
                        />
                        <hr/>

                        <input
                            type="text"
                            placeholder="Suite"
                            {...register(
                                "address.suite"
                            )}
                        />
                        {
                            errors.address
                            &&
                            console.log(errors.address.suite.message)
                            &&
                            <p>{errors.address.suite.message}</p>
                        }
                        <hr/>

                        <input
                            type="text"
                            placeholder="City"
                            {...register(
                                "address.city"
                            )}
                        />
                        <hr/>

                        <input
                            type="number"
                            placeholder="Zipcode"
                            {...register(
                                "address.zipcode"
                            )}
                        />
                        <hr/>
                    </fieldset>

                    <input type="submit" value='Create New User'/>
                </form>
            </div>

        </>

    );
}
export default CreateNewUserForm;