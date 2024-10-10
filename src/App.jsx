import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import getId from './utils/getId'
import { useSnapshot } from 'valtio'
import Store from './store/Store'
import { useStore } from './hooks/useStore'
import { addTask } from './store/Store'

function App() {

    // Tâches avec useState
//   const [tasks, setTasks] = useState([
//     { name: "task1", completed: true, id: getId() },
//     { name: "task2", completed: false, id: getId() }
// ]);

  // Tâches avec une API
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Fetch:", data);
  //       setTasks(data);
  //     })
  // }, []);

  const { tasks } = useStore;

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTasks = (taskId) => {
    const filteredTasks = tasks.filter((e) => e.id !== taskId);
    setTasks(filteredTasks);
  }

  const editTasks = (taskId) => {
    
  }

  const checkTask = (taskId, checked) => {
    const index = tasks.findIndex((t) => t.id === taskId);
    const task = tasks[index];
    task.complete = checked;

    const newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
  }

  return (
    <>
    <Header />
      <div>

        <AddTask onAdd={addTask} />
        <ListTask tasks={tasks} onDelete={deleteTasks} onCheck={checkTask} onEdit={editTasks}/>

      </div>
  
      <Footer />
    </>
  )
}

export default App
