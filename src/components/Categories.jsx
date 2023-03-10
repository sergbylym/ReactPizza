import React from "react";
const Categories = ({value, onClickCategory}) => {
  
  const categories = ["All", "Meet", "Vegetariano", "Grill", "Hot"];
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
