import react from 'react';
const ToDoList = () => {
    const [toDoItems, setToDoItems] = react.useState([]);
    const [newToDo, setNewToDo]= react.useState([]);

    const addnewToDo = (e) => {
        e.preventDefault();
        if(newToDo.trim()!=='')
        {
            setToDoItems([...toDoItems, {text: newToDo, completed: false}]);
            setNewToDo('');
        }
    };
    const deleteToDo = (index) =>
    {
        const updatedToDo = [...toDoItems];
        updatedToDo.splice(index,1);
        setToDoItems(updatedToDo);
    };
    const toggleCompleted = (index) => {
        const updatedToDo = [...toDoItems];
        updatedToDo[index].completed =! updatedToDo[index].completed;
        setToDoItems(updatedToDo);
    }
    return (
        <div>
            <h3>To Do list</h3>
            <form onSubmit={addnewToDo}>
                <input type='text' value={newToDo} onChange={e => setNewToDo(e.target.value)} placeholder='add new task'></input>
                <button type='submit'>add</button>
            </form>
            <ul>
            { toDoItems.map((todo, index) => (
          <li key={index} style={todo.completed ? { textDecoration: 'line-through' } : null}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            />
            {todo.text}
            <button onClick={() => deleteToDo(index)}>Delete</button>
          </li>
        ))}

                {/* {toDoItems.map((todo, index) => {
                    <li key={index} style={todo.completed ? {textDecoration : 'line-through'} : null}>
                        <input type='checkbox' checked={todo.completed} onChange={() => toggleCompleted(index)}></input>
                        {todo.text}
                        <button onClick={() => deleteToDo(index)}>Delete</button>
                    </li>
                })} */}
            </ul>
        </div>
    );
};
export default ToDoList;