import React from 'react';

const Rickandmorty = ({rickandmorty}) => {
    const {name,status,species,gender,image} = rickandmorty;
    return (
        <article>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <hr/>
        </article>
    );
};

export default Rickandmorty;