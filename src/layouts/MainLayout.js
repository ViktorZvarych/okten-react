import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {Header} from "../components";
import {ContextProvider} from "../hocs";


const MainLayout = () => {
    console.log('render MainLayout');

    return (
        <ContextProvider>
            <div>
                <Header/>
                {/*<h2>MainLayout</h2>*/}
                <Outlet/>
            </div>
        </ContextProvider>

    );
};

export {
    MainLayout
};