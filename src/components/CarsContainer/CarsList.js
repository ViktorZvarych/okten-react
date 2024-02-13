import React from 'react';

import Car from "./Car";

const CarsList = ({cars, changeShouldGetAll}) => {
    return (
        <ol>
            {cars && cars.toReversed().map(car => <Car key={car.id} car={car} changeShouldGetAll={changeShouldGetAll}/>)}
        </ol>
    );
};

export default CarsList;