import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import {carsService} from "../../services/carsService";
import BrandInput from "./BrandInput";
import YearInput from "./YearInput";
import PriceInput from "./PriceInput";

const UpdateCarForm = ({car, changeShouldUpdate}) => {
    const {id, brand, price, year} = car;

    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        setValue
    } = useForm({mode: 'all'});

    useEffect(() => {
        setValue('brand', brand, {shouldValidate: true})
        setValue('price', price, {shouldValidate: true})
        setValue('year', year, {shouldValidate: true})
    }, []);

    const updateNewCar = async (data) => {
        await carsService.update(id, data);
        changeShouldUpdate();
    };

    return (
        <form onSubmit={handleSubmit(updateNewCar)}>

            <BrandInput register={register} errors={errors}/>
            <YearInput register={register} errors={errors}/>
            <PriceInput register={register} errors={errors}/>

            <div>
                <button disabled={!isValid}>Update Car</button>
                <button onClick={changeShouldUpdate}>Cancel</button>
            </div>
        </form>
    );
};

export default UpdateCarForm;