import React from "react";
import Task from "./Task"


function TaskList({tasks, setTasks, selectedCategory }) {

  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") {
      return true
    } else {
      return (task.category === selectedCategory)
    }
  })
  
  function onDeleteTask(e) {
    const updatedTasks = tasks.filter(task => task.text !== e.target.id) 
    setTasks(updatedTasks)
  }

  return (
    <div className="tasks">
      {tasksToDisplay.map((task)=>{
    return <Task key={task.text} category={task.category} text={task.text} setTaskData={setTasks} onDeleteTask={onDeleteTask} />
  })}
    </div>
  );
}

export default TaskList;
