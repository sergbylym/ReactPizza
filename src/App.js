import React from "react";
import "../src/scss/app.scss";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBock";
import Sort from "./components/Sort";
// import pizzas from "./assets/pizzas.json";// files for render pizza without backend
function App() {
  let [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://63a6dada59fd83b1bb393cd1.mockapi.io/items")
      .then(res =>  res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizza</h2>
            <div className="content__items">
              {items.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
