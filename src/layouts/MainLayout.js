import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <div className={css.main}>
                <Outlet/>
            </div>
            <hr/>
            <Footer/>
        </div>
    );
};

export default MainLayout;