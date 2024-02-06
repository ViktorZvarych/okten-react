import React, {useEffect, useState} from 'react';
import getLaunchesFromApiService from "../services/getLaunchesFromApi.service";
import Launch from "./Launch";

import styles from './Launches.module.css';

const Launches = () => {
    const [launches, setLaunches] = useState(null);

    useEffect(() => {
        getLaunchesFromApiService()
            .then(response => setLaunches(response))
    }, []);

    return (
        <section className={styles.container}>
            {
                launches
                &&
                launches
                    .filter(launch => launch['launch_year'] !== '2020')
                    .map((launch, index) => <Launch key={launch['flight_number']+index} launch={launch}/>)
            }
        </section>
    );
};

export default Launches;