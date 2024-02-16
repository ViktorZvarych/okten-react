import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {createDetailsArray} from "../../helpers";

const UserDetails = ({id, state}) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (state?.user) {
            setUserDetails(createDetailsArray(state.user))
            console.log(state)
        } else {
            usersService
                .getById(id)
                .then(({data}) => setUserDetails(createDetailsArray(data)))
        }
    }, [id, state]);

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