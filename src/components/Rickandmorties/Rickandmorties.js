import React from 'react';
import {rickandmorties} from "../../data/data";
import Rickandmorty from "./Rickandmorty";


const Rickandmorties = () => {
    return (
        <section>
            <h2>Rickandmorties</h2>
            {rickandmorties.map(rickandmorty => <Rickandmorty key={rickandmorty.id} rickandmorty={rickandmorty}/>)}
        </section>
    );
};

export default Rickandmorties;