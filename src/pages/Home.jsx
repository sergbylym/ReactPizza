import React from 'react'
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Skeleton from "../components/PizzaBock/Skeleton"
import PizzaBlock from "../components/PizzaBock"
const Home = () => {
   let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  const [sortType, setSortType ] = React.useState(0)
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
   setIsLoading(true)
    fetch("https://63a6dada59fd83b1bb393cd1.mockapi.io/items?category=" + categoryId)
      .then(res =>  res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false)
      });
      window.scrollTo(0,0)
  }, [categoryId]);
   return (

   <div className="container">
<div className="content__top">
  <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
  <Sort value={sortType} onChangeSort = {(id) => setSortType(id)} />
</div>
<h2 className="content__title">All pizza</h2>
<div className="content__items">


{
isLoading 
? [...new Array(6)].map((_, index) => <Skeleton key = {index}/>)
: items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
}
               


</div>
</div>

   )
}

export default Home;