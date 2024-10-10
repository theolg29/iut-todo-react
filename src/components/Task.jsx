import { Link } from 'raviger'


const Task = ({ task, onDelete, onCheck }) => {


return (
    <>
    <div>
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
        
        <button onClick={() => {onDelete(task.id);}}>Delete</button>
        
        {/* Avec le useState */}
        {task.name}

        {/* Avec l'API */}
        {/* {task.title} */}

    </li>

    <Link href={`/edit/${task.id}`}>Edit</Link>
    
    </div>
    
    </>
);
};

export default Task;