import React from "react";

function CategoryFilter({categories, onHandleButtonClick, selectedCategory }) {
  console.log(selectedCategory)

  const buttons = categories.map(category => 
    <button 
      id={category} 
      key={category} 
      onClick={(e)=> onHandleButtonClick(e, category)} 
      className={category === selectedCategory? "selected": null} >
      {category}
    </button>
  )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
