import React from "react";
const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(0)}
          className={activeIndex === 0 ? 'active' : ""}
        >
          All
        </li>
        <li
          onClick={() => onClickCategory(1)}
          className={activeIndex === 1 ? 'active' : ""}
        >
          Meet
        </li>
        <li
          onClick={() => onClickCategory(2)}
          className={activeIndex === 2 ? 'active' : ""}
        >
          Vegetariano
        </li>
        <li
          onClick={() => onClickCategory(3)}
          className={activeIndex === 3 ? 'active' : ""}
        >
          Grill
        </li>
        <li
          onClick={() => onClickCategory(4)}
          className={activeIndex === 4 ? 'active' : ""}
        >
          Hot
        </li>
        <li
          onClick={() => onClickCategory(5)}
          className={activeIndex === 5 ? 'active' : ""}
        >
          Close
        </li>
      </ul>
    </div>
  );
};

export default Categories;
