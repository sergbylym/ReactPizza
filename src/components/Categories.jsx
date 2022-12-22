import React from "react";
const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ["All", "Meet", "Vegetariano", "Grill", "Hot"];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  }; //mark  selected category
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
