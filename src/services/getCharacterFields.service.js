const getCharacterFields = (character) => {
    let characterFields = [];

    for (const [key, value] of Object.entries(character)) {
        characterFields.push([key, value]);
    }

    return characterFields;
}

export default getCharacterFields;