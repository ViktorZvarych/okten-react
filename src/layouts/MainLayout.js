import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {createContext, useEffect, useState} from "react";
import {episodesService} from "../services";

const Context = createContext(null);

const MainLayout = () => {
    console.log('render MainLayout');

    const [episodes, setEpisodes] = useState(null);

    useEffect(() => {
        episodesService.getAll().then(({data}) => setEpisodes(data.results))
        console.log(episodes);
    }, []);



    return (
        <Context.Provider value={{episodes}}>
            <div>
                <Header/>
                <h2>MainLayout</h2>
                <Outlet/>
            </div>
        </Context.Provider>

    );
};

export {
    MainLayout,
    Context
};