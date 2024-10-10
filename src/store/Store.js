import { proxy } from "valtio";
import getId from '../utils/getId';


// Stockage du Store - Données
const Store = proxy({
  theme: "light",
  count: 0,
  tasks: [
    { name: "task1", completed: true, id: getId() },
    { name: "task2", completed: false, id: getId() }
  ]
});

export default Store;

// --------------------------------------------

// Gestion des tâches
export const addTask = (task) => {
  Store.tasks = [task, ...Store.tasks];
}

export const deleteTasks = (taskId) => {
  const filteredTasks = Store.tasks.filter((e) => e.id !== taskId);
  Store.tasks = filteredTasks;
}

export const getTaskById = (taskId) => {
  return Store.tasks.find((task) => task.id == taskId);
}

export const editTask = (task) => {
  const index = Store.tasks.findIndex((t) => t.id == task.id);
  console.log("editing task", task, index);
  Store.tasks[index] = { ...Store.tasks[index], ...task };
}

// Compteur
export const increment = () => {
  Store.count = Store.count + 1;
}
export const decrement = () => {
  Store.count = Store.count - 1;
}

// Theme
// export const lightMode = () => {
//   Store.theme = "light";
// }
// export const darkMode = () => {
//   Store.theme = "dark";
// }

export const toggleTheme = () => {
  Store.theme = Store.theme === "dark" ? "light" : "dark";

}