import React from 'react';
import getCharacterFields from "../services/getCharacterFields.service";

const Character = ({character}) => {
    const characterFields = getCharacterFields(character);
    console.log(characterFields)

    return (
        <article>
            {
                characterFields.map(
                    ([key, value]) => {
                        switch (key) {
                            case 'id':
                                return '';
                            case 'name':
                            case 'surname':
                                return <h3>{`${key}: ${value}`}</h3>;
                            case 'image':
                            case 'photo':
                                return <img src={value}  alt={value}/>;
                            default:
                                return <p>{`${key}: ${value}`}</p>;
                        }
                    }
                )
            }
        </article>
    );
};

export default Character;