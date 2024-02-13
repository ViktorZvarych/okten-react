import React from "react";
import {useForm} from "react-hook-form";

import {carsService} from "../../services/carsService";
import BrandInput from "./BrandInput";
import YearInput from "./YearInput";
import PriceInput from "./PriceInput";

const CreateNewCarForm = ({changeShouldGetAll}) => {

    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        reset
    } = useForm({mode: 'all'})

    const createNewCar = async (data) => {
        await carsService.create(data);
        reset();
        changeShouldGetAll();
    };

    return (
        <form onSubmit={handleSubmit(createNewCar)}>

            <BrandInput register={register} errors={errors}/>
            <YearInput register={register} errors={errors}/>
            <PriceInput register={register} errors={errors}/>

            <div>
                <button disabled={!isValid}>Create new Car</button>
            </div>
        </form>
    );
};

export default CreateNewCarForm;