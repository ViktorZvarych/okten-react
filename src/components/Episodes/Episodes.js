import {Outlet, useSearchParams} from "react-router-dom";

import {Episode} from "./Episode";
import {useAppContext} from "../../hooks";
import {Pagination} from "../Pagination/Pagination";
import {useEffect} from "react";
import {episodesService} from "../../services";

const Episodes = () => {
    console.log('render Episodes');

    const {episodes, setEpisodes} = useAppContext();

    const [urlParams, setUrlParams] = useSearchParams();

    const currentPage = urlParams.get('page')

    useEffect(() => {
        episodesService.getAll(currentPage).then(({data}) => {
            setEpisodes(data.results);
        });
    }, [currentPage]);

    return (
        <div>
            <h2>Episodes</h2>
            <Pagination/>
            {
                episodes
                &&
                episodes.map(episode => <Episode key={episode.id} episode={episode}/>)
            }
        </div>
    );
};

export {Episodes};