import React from 'react';

const Launch = ({launch: {mission_name, launch_year, links: {mission_patch_small}}}) => {
    return (
        <article>
            <h3>Mission name: {mission_name}</h3>
            <img src={mission_patch_small} alt={mission_name}/>
            <p>{launch_year} year</p>
        </article>
    );
};

export default Launch;