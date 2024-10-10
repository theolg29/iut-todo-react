import { TextField } from '@radix-ui/themes';
import { Link } from 'raviger';
import { editTask, getTaskById } from '../store/Store';
import { useEffect, useState } from 'react';

const EditTask = ({ id }) => {

    const [task, setTask] = useState({});

    useEffect(() => {
        const storeTask = getTaskById(id);
        setTask(storeTask);
    }, [id])


    return (
        <>
        <div>
            <h1>EditTask {id}</h1>
            {JSON.stringify(task)}
            <TextField.Root  onChange={(evt) => {
                editTask({id:id, name: evt.target.value })
            }} type="text" placeholder="Add task" defaultValue={task?.name}>
            </TextField.Root>

                
            <Link href="/">Back to Home</Link>
        </div>
        </>
    );
};

export default EditTask;