async function getLaunchesFromApiService() {
    const URL = 'https://api.spacexdata.com/v3/launches/';
    const launchesJson = await fetch(URL);
    const launches = await launchesJson.json();

    return launches;
}

export default getLaunchesFromApiService;