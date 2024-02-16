import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";

const UserDetails = ({id, state}) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (state) {
            setUserDetails(createUserDetails(state))
            // console.log(state)
        } else {
            usersService
                .getById(id)
                .then(({data}) => setUserDetails(createUserDetails(data)))
        }
    }, [id, state]);

    const userDetailsArray = [];
    const createUserDetails = (user) => {

        for (const [key, value] of Object.entries(user)) {
            if (typeof value === 'object') {
                userDetailsArray.push({key: `${key.toUpperCase()} `, value: ''});
                createUserDetails(value);
            } else {
                userDetailsArray.push({key: `- ${key[0].toUpperCase() + key.slice(1)}`, value: `${value}`});
            }
        }
        return userDetailsArray;
    }

    return (
        <div>
            <h3>User details</h3>

            {
                userDetails
                &&
                <div>
                    {
                        userDetails.map(({key, value}) =>
                            (<p key={Math.random()}>
                                {key}: <b>{value}</b>
                            </p>))
                    }
                </div>}

        </div>
    );
};

export default UserDetails;