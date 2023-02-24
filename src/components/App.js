import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function onHandleChange(e) {
    const input = e.target.value
    const key = e.target.name
    const newData = {
      ...formData,
      [key]: input
    }
    setFormData(newData)
  }
  console.log(formData)

  function onFormSubmit(e) {
    e.preventDefault()
    setTasks([...tasks, formData])
  }

  console.log(tasks)
  

  function onHandleButtonClick(e, category) {
    e.target.className = "selected"
    setSelectedCategory(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onHandleButtonClick={onHandleButtonClick} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onHandleChange={onHandleChange} onFormSubmit={onFormSubmit}/>
      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
