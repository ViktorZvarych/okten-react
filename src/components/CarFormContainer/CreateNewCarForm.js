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
        formState: {isValid, errors}
    } = useForm({mode: 'all'})

    const createNewCar = (data) => {
        carsService.create(data).then(() => changeShouldGetAll());
    };

    return (
        <form onSubmit={handleSubmit(createNewCar)}>

            <BrandInput register={register} errors={errors}/>
            <YearInput register={register} errors={errors}/>
            <PriceInput register={register} errors={errors}/>

            <button disabled={!isValid}>Create new Car</button>
        </form>
    );
};

export default CreateNewCarForm;