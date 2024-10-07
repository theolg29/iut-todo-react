import { useState } from "react";

function Todo() {
    const [task, setTask] = useState([
        { name: "task1", completed: true, id: `${Math.random()}` },
        { name: "task2", completed: false, id: `${Math.random()}` }
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const handleCompleted = (evt, taskId) => {
        
        const checked = evt.target.checked;

        const newTasks = [...task];
    
        const indexOfTask = task.findIndex((e) => e.id === taskId);
    
        const completeTask = task[indexOfTask];
        completeTask.completed = checked;
        newTasks[indexOfTask] = completeTask;
        setTask(newTasks);
    }

    const handleDeleted = (taskId) => {
        
        const newTasks = task.filter((e) => e.id !== taskId);

        setTask(newTasks);
        
    }


    return (
        <>
            <ul>
                {task.map((task) => (
                    <li style={{textDecoration : task.completed ? "line-through" : ""}} key={task.id}>
                        <button onClick={() => {handleDeleted(task.id)}}>Delete</button>
                        <input type="checkbox" onChange={(evt) => {handleCompleted(evt, task.id)}}/>{task.name}
                    </li>
                ))}
            </ul>
            
            <input type="text" onChange={handleChange} />
            <button onClick={() => setTask ((task) => [...task, {name : inputValue, completed : false, id : `${Math.random()}`}])}>Add task</button>
        </>
    );
}

export default Todo;
