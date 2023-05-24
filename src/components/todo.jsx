import React from "react";
import Todo_List from "./pop";
const ToDo = () => {
    const [isShown, setIsShown] = React.useState(false);
    const toggleToDo = (event) => {
       setIsShown(current => !current);
    }
    return(
        <div className="todo">
            <div style={{display: isShown ? 'block' : 'none'}}>
                <Todo_List />
            </div>
        <button onClick={toggleToDo}>To Do</button>
        </div>
    );
};
export default ToDo;