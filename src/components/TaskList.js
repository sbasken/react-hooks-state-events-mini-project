import React from "react";
import Task from "./Task"


function TaskList({tasks}) {

  const tasksToDisplay = tasks.map((task)=>{
    return <Task key={task.text} category={task.category} text={task.text}/>
  })

  console.log(tasksToDisplay)

  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
