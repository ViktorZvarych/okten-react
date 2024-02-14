import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services/albumsService";
import Album from "../AlbumsContainer/Album";

const Albums = () => {
    const [albums, setAlbums] = useState(null);

    useEffect( () => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, []);

    return (
        <ol>
            {albums && albums.map(album => <Album key={album.id} album={album}/>)}
        </ol>
    );
};

export default Albums;