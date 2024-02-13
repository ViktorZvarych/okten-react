import React from 'react';

const PriceInput = ({register, errors}) => {

    return (
        <label>
            <h3>Price: </h3>
            <input
                type="number"
                {...register(
                    'price',
                    {
                        required: "Please enter the price.",
                        max: {
                            value: 1000000,
                            message: 'maximum: 1000000',
                            valueAsNumber: true
                        },
                        min: {
                            value: 0,
                            message: 'minimum: 0',
                            valueAsNumber: true
                        }
                    }
                )}
            />
            {errors.price && <p>{errors.price.message}</p>}
        </label>
    );
};

export default PriceInput;