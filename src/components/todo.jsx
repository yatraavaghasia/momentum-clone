import React from "react";
import ToDoList from "./todolist";
const ToDo = () => {
    const [isShown, setIsShown] = React.useState(false);
    const toggleToDo = (event) => {
       setIsShown(current => !current);
    }
    return(
        <div className="todo">
            <div style={{display: isShown ? 'block' : 'none'}}>
                <ToDoList />
            </div>
        <button onClick={toggleToDo}>To Do</button>
        </div>
    );
};
export default ToDo;