import React from 'react';

const BrandInput = ({register, errors}) => {
    return (
        <label>
            <h3>Brand: </h3>
            <input
                type="text"
                {...register(
                    'brand',
                    {
                        required: "Please enter the brand.",
                        pattern: {
                            value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                            message: 'Invalid character'
                        },

                        maxLength: {
                            value: 20,
                            message: 'max length: 20'
                        },
                        minLength: {
                            value: 1,
                            message: 'min length: 1'
                        }
                    }
                )}
            />
            {errors.brand && <p>{errors.brand.message}</p>}
        </label>
    );
};

export default BrandInput;