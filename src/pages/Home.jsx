import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBock/Skeleton";
import PizzaBlock from "../components/PizzaBock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategoryID, setPageCount } from "../redux/slices/filterSlice";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
const currentPage = useSelector((state) => state.filterSlice.currentPage)
  const dispatch = useDispatch();
  const { searchValue } = React.useContext(SearchContext);
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const sortType = useSelector((state) => state.filterSlice.sort)

  const onChangeCategory = (id) => {
    dispatch(setCategoryID(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCount(number))
  }

  React.useEffect(() => {
    setIsLoading(true); 
    const search = searchValue ? `&search = ${searchValue}` : "";
   axios
   .get(
      `https://63a6dada59fd83b1bb393cd1.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category =${categoryId} ` : ""
      }
      &sortBy=${sortType.sortProp}&oreder=desc$ ${search} `
    )
      
      .then((res) => {
        setItems(res.data);
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
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort  />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination value={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
  