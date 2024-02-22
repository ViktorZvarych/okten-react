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
        (async () => {
            try {
                let charactersIdArray = [];
                characters.map(characterUrl => {
                    charactersIdArray.push(characterUrl.slice(characterUrl.lastIndexOf('/')+1))
                })
                const {data} = await charactersService.getById(charactersIdArray.join(','));
                setCharactersArray(data);
            } catch (e) {
                console.log(e)
            }

        })()
    }, [characters]);


    return (
        <div>
            <h2>Episode Characters</h2>
            {charactersArray.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};