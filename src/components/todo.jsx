import React from "react";
import ToDoList from "./todolist";
const ToDo = () => {
    const [isShown, setIsShown] = React.useState(false);
    const toggleToDo = (event) => {
       setIsShown(current => !current);
    }
    return(
        <div>
        <button onClick={toggleToDo}>To Do</button>
        {/* {
            isShown && <ToDoList />
        } */}
        <div style={{display: isShown ? 'block' : 'none'}}>
        <ToDoList />
      </div>
        {/* <ToDoList /> */}
        </div>
    );
};
export default ToDo;