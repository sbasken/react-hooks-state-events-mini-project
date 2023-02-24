import React from "react";
import Task from "./Task"


function TaskList({tasks, setTasks}) {
  // console.log(taskData)

  const tasksToDisplay = tasks.map((task)=>{
    return <Task key={task.text} category={task.category} text={task.text} setTaskData={setTasks} onDeleteTask={onDeleteTask} />
  })
  
  function onDeleteTask(e) {
    const updatedTasks = tasks.filter(task => {
      if (task.text !== e.target.id) {
        return task
      }
    })
    setTasks(updatedTasks)
  }



  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
