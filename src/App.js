import React from "react";
import "../src/scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import pizzas from "./assets/pizzas.json";// files for render pizza without backend
function App() {
  
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
         {/* <Home/> */}
         <NotFound/>
        </div>
      </div>
    </div>
  );
}

export default App;
