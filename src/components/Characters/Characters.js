import {useEffect, useState} from "react";
import {charactersService} from "../../services";
import {useLocation} from "react-router-dom";
import {Character} from "./Character";

const Characters = () => {
    console.log('render Characters');


    const {state} = useLocation();

    const characters = state?.characters ? state.characters : []

    const [charactersArray, setCharactersArray] = useState([]);

    useEffect(() => {
        characters.map(async (characterUrl) => {
            const characterDetails = await charactersService.getByUrl(characterUrl).then(({data}) => data);
            setCharactersArray(prev => [...prev, characterDetails]);
        })

    }, [characters]);


    useEffect(() => {
        console.log(charactersArray);
    }, [charactersArray]);

    return (
        <div>
            <h2>Episode Characters</h2>
            {charactersArray.map(character => <Character key={Math.random()} character={character}/>)}
        </div>
    );
};

export {Characters};