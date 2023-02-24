import React from "react";

function NewTaskForm({categories, onHandleChange, onFormSubmit}) {

  const options = categories.filter(category => category !== "All")

  return (
    <form className="new-task-form" onSubmit={(e)=>onFormSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>onHandleChange(e)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>onHandleChange(e)}>
          {options.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
