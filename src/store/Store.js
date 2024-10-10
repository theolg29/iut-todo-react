import { proxy } from "valtio";
import getId from '../utils/getId'

const Store = proxy({
  tasks: [
    { name: "task1", completed: true, id: getId() },
    { name: "task2", completed: false, id: getId() }
  ]
});

export default Store;


export const addTask = (task) => {
  Store.tasks([task, ...Store.tasks]);
}