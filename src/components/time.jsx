import React from "react";
function ReadTime()
{
    const now = new Date().toLocaleTimeString();
    const [getTime, setTime] = React.useState(now);
    function updateTime()
    {
        const newTime = new Date().toLocaleTimeString();
        const hours = new Date().getHours();
        //console.log(hours);
        setTime(newTime);
    };
    setInterval(updateTime, 1000);
  let [name, setName] = React.useState('');
const [submitted, setSubmitted] = React.useState(false);
  const formstyle = {
    display: 'block'
  };
  const nameStyle = {
    display: 'none'
  };
  const addName = (e) => {
    e.preventDefault();
    if(name.trim()!=='')
    {
        setName(name);
        setSubmitted(true);
    }
  };
   let [greeting, setGreeting] = React.useState('');
   React.useEffect(()=> {
    const getCurrentTime = () => {
        let hours = new Date().getHours();
        // console.log(hours);
        if(hours<12)
            {
                setGreeting('Good Morning');
            }
            else if(hours < 16)
            {
                setGreeting('Good Afternoon');
            }
            else{
                setGreeting('Good Evening');
            }
    };
    getCurrentTime();
   },[]);
    return (
        <div className="time-parent">
        <div className="time-child-1"><h1>{getTime}</h1></div>
        <div className="time-child-2">
        {!submitted ? (
            <form onSubmit={addName} id="nameform">
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="tell us your name"></input>
            <button type="submit">submit</button>
        </form>
        ) : (
            <h1 id="greeting">{greeting}, {name}.</h1>
        )}
        </div>
        </div>
    );
}
export default ReadTime;