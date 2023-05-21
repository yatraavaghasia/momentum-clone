import React from "react";
import axios from 'axios';
const Quotes =  () => {
    const [quote, setQuote] = React.useState('');

    const fetchQuotes = async() => {
        try {
            const response = await axios.get('https://type.fit/api/quotes');
            console.log(response.data);
            const randomIndex = Math.floor(Math.random()*response.data.length);
            setQuote(response.data[randomIndex]);
        }
        catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        fetchQuotes();
    },[]);
    const handleRefresh = () => {
        // window.location.reload(); // Refresh the page to get a new post
        fetchQuotes();
      };

      return (
        <div className="quote">
         {quote ? (
                <div>
                <h3>{quote.text}</h3>
                <p>{quote.author}</p>
                </div>
            ):(
                <p>Loading...</p>
            )}
            
            <button onClick={handleRefresh}>Refresh</button>
        </div>
      );
};
export default Quotes;