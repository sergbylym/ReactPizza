import React from "react";
import "../src/scss/app.scss";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
// import pizzas from "./assets/pizzas.json";// files for render pizza without backend


const SearchContext = React.createContext()
function App() {
  const [searchValue, setSearchValue] = React.useState('')
  return (
   
     <SearchContext.Provider value={{searchValue, setSearchValue}}>
       <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
     </SearchContext.Provider>
    
  );
}

export default App;
