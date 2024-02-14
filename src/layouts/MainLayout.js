import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
            <hr/>
            <Footer/>
        </div>
    );
};

export default MainLayout;