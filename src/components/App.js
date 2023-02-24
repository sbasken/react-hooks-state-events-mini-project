import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");

  

  function onHandleButtonClick(e, category) {
    e.target.className = "selected"
    setSelectedCategory(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onHandleButtonClick={onHandleButtonClick} selectedCategory={selectedCategory}/>
      <NewTaskForm />
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
