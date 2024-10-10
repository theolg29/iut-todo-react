import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { Link } from "raviger";

const Task = ({ task, onDelete, onCheck }) => {
  return (
    <>
      <Flex m="2">
        <li
          style={{
            textDecoration: task.completed ? "line-through" : "",
            listStyle: "none",
          }}
          key={task.id}
        >
          <input
            type="checkbox"
            defaultChecked={task.completed}
            onChange={(evt) => {
              onCheck(task.id, evt.target.checked);
            }}
          />

          <Button
            onClick={() => {
              onDelete(task.id);
            }}
          >
            <TrashIcon />
          </Button>

          {/* Avec le useState */}
          {task.name}

          {/* Avec l'API */}
          {/* {task.title} */}
        </li>

        <Flex gap="5">
          <Link href={`/edit/${task.id}`}>
            <Pencil1Icon />
            Edit
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Task;
