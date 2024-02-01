import {simpsons, charactersFromApi} from "../data";
import Character from "./Character";

const Characters = () => {

    return (
        <>
            <h2>Simpsons</h2>
            {simpsons.map(
                (simpson, index) =>
                    <Character
                        key={index}
                        character={simpson}
                    />
            )}

            <h2>Characters</h2>
            {charactersFromApi.map(
                (character) =>
                    <Character
                        key={character.id}
                        character={character}
                    />
            )}
        </>
    );
};

export default Characters;