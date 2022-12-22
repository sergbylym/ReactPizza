import "../src/scss/app.scss";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
function App() { 
  return (
    <div classNameName="App">
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
              <PizzaBlock title="Mexicano" price="350UA" />
              <PizzaBlock  title = 'Vegetariano' price = '300UA' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
