import React, {useEffect, useState} from 'react';

import CarsList from "./CarsList";
import {carsService} from "../../services/carsService";
import CreateNewCarForm from "../CarFormContainer/CreateNewCarForm";

const CarsContainer = () => {
    const [cars, setCars] = useState(null);
    const [shouldGetAll, setShouldGetAll] = useState(false);

    useEffect(() => {
        carsService
            .getAll()
            .then(({data}) => setCars(data));
    }, [shouldGetAll]);

    const changeShouldGetAll = () => setShouldGetAll(shouldGetAll => !shouldGetAll)

    return (
        <div>
            <CreateNewCarForm changeShouldGetAll={changeShouldGetAll}/>
            <CarsList cars={cars} changeShouldGetAll={changeShouldGetAll}/>
        </div>
    );
};

export default CarsContainer;