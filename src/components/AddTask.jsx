import { useState } from "react";
import getId from '../utils/getId'
import { useRef } from "react";


function AddTask({ onAdd }) {

    // const [input, setInput] = useState("");

    const inputRef = useRef("");

    

    const handleChange = (event) => {
       // setInput(event.target.value);
       inputRef.current = event.target.value;
    }

    const handleAdd = () => {
        onAdd({
            // name: input,
            name: title,
            // name: input.current,
            completed: false,
            id: getId(),
        });
    }

    return (
        <>
            <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleAdd}>Add task</button>
            </div>
        </>
    );
}

export default AddTask;
