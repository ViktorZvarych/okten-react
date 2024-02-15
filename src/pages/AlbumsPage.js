import React from 'react';

import Albums from "../components/AlbumsContainer/Albums";
import {Outlet} from "react-router-dom";

const AlbumsPage = () => {
    return (
        <div>
            <h2>Albums Page</h2>
            <Albums />
            <Outlet/>
        </div>
    );
};

export default AlbumsPage;