import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";

import {createDetailsArray} from "../../helpers";
import {useLocation, useParams} from "react-router-dom";

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState(null);

    const {state} = useLocation();
    const {id} = useParams()
    console.log(state, id)

    useEffect(() => {
        if (state?.user) {
            setUserDetails(createDetailsArray(state.user))
        } else {
            usersService
                .getById(id)
                .then(({data}) => setUserDetails(createDetailsArray(data)))
        }
    }, [id]);

    return (
        <div>
            {
                userDetails
                &&
                <div>
                    <h3>User details</h3>
                    {
                    userDetails.map(({key, value}) =>
                        (<p key={Math.random()}>
                            {key}: <b>{value}</b>
                        </p>))
                }
                </div>
            }

        </div>
    );
};

export default UserDetails;