// Internal Import
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import { useStore } from "./hooks/useStore";
import {
  addTask,
  deleteTasks,
  editTask,
  increment,
  decrement,
  toggleTheme,
} from "./store/Store";

// External Import
import { Box, Button, Flex, Switch } from "@radix-ui/themes";
import { Theme } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function App() {
  // --- Tâches avec useState ---
  //   const [tasks, setTasks] = useState([
  //     { name: "task1", completed: true, id: getId() },
  //     { name: "task2", completed: false, id: getId() }
  // ]);

  // --- Tâches avec une API ---
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Fetch:", data);
  //       setTasks(data);
  //     })
  // }, []);

  // const addTask = (task) => {
  //   setTasks([...tasks, task])
  // }

  // const deleteTasks = (taskId) => {
  //   const filteredTasks = tasks.filter((e) => e.id !== taskId);
  //   setTasks(filteredTasks);
  // }



  const checkTask = (taskId, checked) => {
    const index = tasks.findIndex((t) => t.id === taskId);
    const task = tasks[index];
    task.complete = checked;

    const newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
  };

  return (
    <>
      <Theme appearance={theme} accentColor="teal" radius="medium">
        <Header />
        <Box>
          <Flex>
            <Button onClick={increment}>+</Button>
            <p>Count: {count}</p>
            <Button onClick={decrement}>-</Button>
          </Flex>

          <AddTask onAdd={addTask} />
          <ListTask
            tasks={tasks}
            onDelete={deleteTasks}
            onCheck={checkTask}
            onEdit={editTask}
          />

          <Flex align="center" gap="2">
            <p>
              <SunIcon />
            </p>
            <Switch defaultChecked onClick={toggleTheme} />
            <p>
              <MoonIcon />
            </p>

            {/* Optimisé */}
            <Button onClick={toggleTheme}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>

            {/* Pas optimisé */}
            {/* {theme === "dark" ? <Button onClick={toggleTheme}><SunIcon /></Button> : <Button onClick={toggleTheme}><MoonIcon /></Button> } */}
          </Flex>
        </Box>

        <Footer />
      </Theme>
    </>
  );
}

export default App;
