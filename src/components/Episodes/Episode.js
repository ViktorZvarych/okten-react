import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    console.log('render Episode');

    const {id, name, airDate, episodeNumber, created, characters} = episode;

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('characters', {state: {characters}})
    }

    return (

        <div onClick={onClickHandler}>
            <h2>Episode</h2>
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