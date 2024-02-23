import {useContext} from "react";

import {NavLink} from "react-router-dom";
import {Context} from "../../hocs";

const Header = () => {
    console.log('render Header');
    const {chosenEpisode, setChosenEpisode} = useContext(Context);

    return (
        <div>
            <NavLink to={''} onClick={() => setChosenEpisode(null)}>Home</NavLink>
            {chosenEpisode && <h2>Episode: {chosenEpisode}</h2>}
            <hr/>
        </div>
    );
};

export {Header};