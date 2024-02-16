const createDetailsArray = (userObject)=> {
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

    return createUserDetails(userObject);
}

export {createDetailsArray}

