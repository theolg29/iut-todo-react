import { useState } from "react";
import getId from '../utils/getId'
import { useRef } from "react";
import { Button, Flex } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";


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
            <Flex gap="4">
            <input type="text" onChange={handleChange} />
            <Button onClick={handleAdd}>
                <PlusIcon ></PlusIcon>
                Add task</Button>
            </Flex>
        </>
    );
}

export default AddTask;
