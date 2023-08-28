import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

function handleAdd (newTask) {
  setTasks([...tasks, newTask])
}

  function handleDelete (deletedTasks) {
    setTasks(tasks.filter((task) => task.text !== deletedTasks))
  }
const visibleTasks = tasks.filter((task) => 
  category === "All" || task.category === category
);


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}  currentCategory={category} onCurrentCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "All")} onTaskFormSubmit={handleAdd}/>
      <TaskList tasks={visibleTasks} onDeleteTask={handleDelete}/>
    </div>
  );
}

export default App;
