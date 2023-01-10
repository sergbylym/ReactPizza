import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBock/Skeleton";
import PizzaBlock from "../components/PizzaBock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
const Home = () => {
  const {searchValue} = React.useContext(SearchContext)
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "Popular",
    sortType: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);
    const search = searchValue ? `&search = ${searchValue}` : ''
    fetch(
      `https://63a6dada59fd83b1bb393cd1.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category =${categoryId} ` : ""
      }
      &sortBy=${sortType.sortProp}&oreder=desc$ ${search} `
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]); 

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    }).map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => 
    <Skeleton key={index} />
   );
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination onChangePage ={number => setCurrentPage(number)}/>
    </div>
  );
};

export default Home;
