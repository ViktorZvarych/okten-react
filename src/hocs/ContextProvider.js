import {createContext, useEffect, useState} from "react";
import {episodesService} from "../services";
import {useSearchParams} from "react-router-dom";

const Context = createContext(null);

const ContextProvider = ({children}) => {
    const [episodes, setEpisodes] = useState(null);
    const [chosenEpisode, setChosenEpisode] = useState(null)

    return (
        <div>
            <Context.Provider value={{episodes, setEpisodes, chosenEpisode, setChosenEpisode}}>
                {children}
            </Context.Provider>
        </div>
    )
}

export {
    ContextProvider,
    Context
}