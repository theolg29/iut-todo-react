import Task from "./Task";

function ListTask({ tasks, onDelete, onCheck }) {

    return (
        <>
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onCheck={onCheck}/>
                ))}
            </ul>    
        </>
    );
}

export default ListTask;
