import React from "react";

function CategoryFilter({currentCategory, onCurrentCategory, categories}) {
  const categoryButtons = categories.map((category) => {
    const className = category === currentCategory ? "selected" : null;
    return (
      <button key ={category} className={className} onClick={() => onCurrentCategory(category)}>{category}</button>
    )
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
