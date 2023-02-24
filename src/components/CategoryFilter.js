import React from "react";

function CategoryFilter({categories, onHandleButtonClick }) {

  const buttons = categories.map(category => {
    return <button id={category} key={category} onClick={onHandleButtonClick} className="" >{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
