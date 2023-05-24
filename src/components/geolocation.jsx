import React from 'react';
const GeolocationComponent = () => {
    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);
    const [error, setError] = React.useState(null);
    const handleGetlocation= () => {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setError(null);
                },
                (error) => {
                    setError(error.message);
                }
            );
        }
        else{
            setError('Geolocation is not supported by the browser.');
        }
    };
    return (
        <div>
            <h2>Geolocation Component</h2>
            <button onClick={handleGetlocation}>Get Location</button>
            {
                latitude && longitude && (
                    <p>latitude: {latitude}, longitude: {longitude}</p>
                )
            }
            {
                error && (<p>Error: {error}</p>)
            }
        </div>
    );
};
export default GeolocationComponent;