import {useContext, useEffect} from "react";

import {Context} from "../../layouts/MainLayout";

const Header = () => {
    console.log('render Header');

    return (
        <div>
            <h2>Header</h2>
        </div>
    );
};

export {Header};