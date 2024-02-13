import React from 'react';

const YearInput = ({register, errors}) => {
    return (
        <label>
            <h3>Year: </h3>
            <input
                type="number"
                {...register(
                    'year',
                    {
                        required: "Please enter the year.",
                        max: {
                            value: new Date().getFullYear(),
                            message: 'Wrong year',
                            valueAsNumber: true
                        },
                        min: {
                            value: 1990,
                            message: 'min year: 1990',
                            valueAsNumber: true
                        }
                    }
                )}
            />
            {errors.year && <p>{errors.year.message}</p>}
        </label>
    );
};

export default YearInput;