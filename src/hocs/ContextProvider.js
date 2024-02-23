import {createContext, useState} from "react";

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