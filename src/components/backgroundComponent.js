import react, { useEffect } from 'react';
import axios from 'axios';
const backgroundComponent = () => {
    const [backgroundUrl, setBackgroundUrl] = react.useState('');
    const fetchBackground = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/?client_id=EtC0F60kOBh9KNaTKTn6IXnNKIZ2z9n9qjoIFUe8-sI', {
                params: {
                    query: ['nature','architecture','art','background'].join(','),
                    orientation: 'landscape',
                    client_id: 'EtC0F60kOBh9KNaTKTn6IXnNKIZ2z9n9qjoIFUe8-sI',
                },
            }
            );
            // console.log(response.data[0].urls.regular);
            console.log(response.data.length);
            console.log(response.data);
            const randomIndex = Math.floor(Math.random()*response.data.length);
            setBackgroundUrl(response.data[randomIndex].urls.regular);
        } catch (error) {
            console.log(error);
        }
    };
    react.useEffect(()=> {
        fetchBackground();
    }, []);
    react.useEffect(() => {
        document.body.style.backgroundImage = `url(${backgroundUrl})`;
        document.body.style.backgroundSize = `cover`;
    },[backgroundUrl]);
    const handleRefresh = () => {
        fetchBackground();
    };
    return (
        <div className='background-refresh'>
            <button onClick={handleRefresh}>Refresh Background</button>
        </div>
    );
};
export default backgroundComponent;