import { useState } from "react";
import getId from '../utils/getId'
import { useRef } from "react";


function AddTask({ onAdd }) {

    // Commenter si on utlise l'API
    const [input, setInput] = useState("");

    const inputRef = useRef("");

    const handleChange = (event) => {
        // Commenter si on utlise l'API
        setInput(event.target.value);
        inputRef.current = event.target.value;
    }

    const handleAdd = () => {
        onAdd({

            // Avec useState
            name: input,

            // Avec API
            // name: title,
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
