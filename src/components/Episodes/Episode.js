import {useNavigate} from "react-router-dom";
import {useContext} from "react";

import {Context} from "../../hocs";

const Episode = ({episode}) => {
    console.log('render Episode');

    const {id, name, airDate, episodeNumber, created, characters} = episode;
    const {chosenEpisode, setChosenEpisode} = useContext(Context);

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('characters', {state: {characters}});
        setChosenEpisode(name);
    }

    return (

        <div onClick={onClickHandler}>
            {/*<h2>Episode</h2>*/}
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>airDate: {airDate}</p>
            <p>episodeNumber: {episodeNumber}</p>
            <p>created: {created}</p>
            <hr/>
        </div>

    );
};

export {Episode};