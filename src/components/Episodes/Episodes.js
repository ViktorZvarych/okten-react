import {Outlet, useSearchParams} from "react-router-dom";

import {Episode} from "./Episode";
import {useAppContext} from "../../hooks";
import {Pagination} from "../Pagination/Pagination";
import {useEffect} from "react";

const Episodes = () => {
    console.log('render Episodes');

    useEffect(() => {

    }, []);

    const {episodes} = useAppContext();

    console.log(episodes);

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