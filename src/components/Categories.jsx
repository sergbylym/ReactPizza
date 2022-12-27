import React from "react";
const Categories = ({value}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ["All", "Meet", "Vegetariano", "Grill", "Hot"];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li key={index}
            onClick={() => setActiveIndex(index)}
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
