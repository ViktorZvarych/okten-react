import {useContext, useEffect} from "react";

import {NavLink} from "react-router-dom";
import {Context} from "../../hocs";

const Header = () => {
    console.log('render Header');
    const {chosenEpisode, setChosenEpisode} = useContext(Context);

    return (
        <div>
            {chosenEpisode && <h2>Episode: {chosenEpisode}</h2>}
            <NavLink to={''} onClick={() => setChosenEpisode(null)}>Home</NavLink>
            <hr/>
        </div>
    );
};

export {Header};