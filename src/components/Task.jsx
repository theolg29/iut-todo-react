import React from "react";

const Task = ({ task, onDelete, onCheck }) => {


return (
    <li
        style={{ textDecoration: task.completed ? "line-through" : "", listStyle: "none" }}
        key={task.id}
    >
        <input
            type="checkbox"
            defaultChecked={task.completed}
            onChange={(evt) => {
                onCheck(task.id, evt.target.checked);
            }}
            
        />
        
        <button
            onClick={() => {
                onDelete(task.id);
            }}
        >
            Delete
        </button>
        {task.title}
    </li>
);
};

export default Task;