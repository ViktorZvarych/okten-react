import React from 'react';
import {simpsons} from "../../data/data";
import Simpson from "./Simpson";


const Simpsons = () => {
    return (
        <section>
            <h2>Simpsons</h2>
            {simpsons.map((simpson, index) => <Simpson key={index} simpson={simpson}/>)}
        </section>
    );
};

export default Simpsons;