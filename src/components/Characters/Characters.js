import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {charactersService} from "../../services";
import {Character} from "./Character";

const Characters = () => {
    console.log('render Characters');

    const navigate = useNavigate();

    const {state} = useLocation();

    const [charactersArray, setCharactersArray] = useState([]);

    useEffect(() => {
        const characters = state?.characters ? state.characters : [];
        
        (async () => {
            try {
                let charactersIdArray = [];
                characters.map(characterUrl => {
                    charactersIdArray.push(characterUrl.slice(characterUrl.lastIndexOf('/')+1))
                    return console.log('Warning:(21, 45) ESLint: Array.prototype.map() expects a return value from arrow function. (array-callback-return)')
                })
                const {data} = await charactersService.getById(charactersIdArray.join(','));
                setCharactersArray(data);
            } catch (e) {
                console.log(e)
            }
        })()
    }, [state.characters]);

    useEffect(() => {
        console.log('!!!!', charactersArray)
    }, [charactersArray]);

    const onClickHandler = () => navigate('../episodes')

    return (
        <div>
            <h2>Episode Characters</h2>
            <button onClick={onClickHandler}>Episodes</button>
            {charactersArray && charactersArray.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};