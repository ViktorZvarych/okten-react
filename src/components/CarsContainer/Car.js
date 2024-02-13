import React, {useState} from 'react';

import {carsService} from "../../services/carsService";
import UpdateCarForm from "../CarFormContainer/UpdateCarForm";

const Car = ({car, changeShouldGetAll}) => {
    const {id, brand, price, year} = car;

    const [shouldUpdate, setShouldUpdate] = useState(false);

    const changeShouldUpdate = () => {
        setShouldUpdate(!shouldUpdate);
        changeShouldGetAll();
    }

    const deleteCar = async () => {
        await carsService.delete(id);
        changeShouldGetAll();
    };

    return (
        <li>
            <h3>{brand}</h3>
            <p>Id: {id}</p>
            <p>Year: {year}</p>
            <p>Price: {price}</p>

            {
                !shouldUpdate
                &&
                <div>
                    <button onClick={deleteCar}>Delete Car</button>
                    <button onClick={changeShouldUpdate}>Update Car</button>
                </div>
            }

            {
                shouldUpdate
                &&
                <UpdateCarForm
                    car={car}
                    changeShouldUpdate={changeShouldUpdate}
                />
            }


            <hr/>
        </li>
    );
};

export default Car;