import React from "react";
function ReadTime()
{
    const now = new Date().toLocaleTimeString();
    const [getTime, setTime] = React.useState(now);
    function updateTime()
    {
        const newTime = new Date().toLocaleTimeString();
        const hours = new Date().getHours();
        // console.log(hours);
        setTime(newTime);
    }
    setInterval(updateTime,1000);
    return (
        <div>{getTime}</div>
    );
}
export default ReadTime;