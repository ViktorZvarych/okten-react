import React from 'react';
import UsersContainer from "./components/UsersContainer/UsersContainer";
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";


const App = () => {
    return (
        <div className='container'>
            <UsersContainer/>
            <CommentsContainer/>
        </div>
    );
};

export default App;
