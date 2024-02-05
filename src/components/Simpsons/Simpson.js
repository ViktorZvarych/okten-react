import React from 'react';

const Simpson = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson;
    return (
        <article>
            <h3>{name} {surname}</h3>
            <img src={photo} alt={name + '' + surname}/>
            <p>Age: {age}</p>
            <p>{info}</p>
            <hr/>
        </article>
    );
};

export default Simpson;