import {useContext, useEffect, useState} from "react";

import {episodesService} from "../../services";
import {Episode} from "./Episode";
import {Outlet} from "react-router-dom";
import {Context} from "../../layouts/MainLayout";

const Episodes = () => {
    console.log('render Episodes');

    const {episodes, setEpisodes} = useContext(Context);

    console.log(episodes);

    return (
        <div>
            <Outlet/>
            <h2>Episodes</h2>
            {
                episodes
                &&
                episodes.map(episode => <Episode key={episode.id} episode={episode}/>)
            }
        </div>
    );
};

export {Episodes};