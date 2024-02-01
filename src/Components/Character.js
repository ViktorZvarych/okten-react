import React from 'react';
import getCharacterFields from "../services/getCharacterFields.service";

const Character = ({character}) => {
    const characterFields = getCharacterFields(character);

    return (
        <article>
            {
                characterFields.map(
                    ([key, value], index) => {
                        switch (key) {
                            case 'id':
                                return '';
                            case 'name':
                            case 'surname':
                                return <h3 key={index+value}>{`${key}: ${value}`}</h3>;
                            case 'image':
                            case 'photo':
                                return <img key={index+value} src={value}  alt={value}/>;
                            default:
                                return <p key={index+value}>{`${key}: ${value}`}</p>;
                        }
                    }
                )
            }
        </article>
    );
};

export default Character;