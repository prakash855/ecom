import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DashBoard from "./page/DashBoard";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Details from "./page/Details/Details";
import Cart from "./page/Cart/Cart";

function App() {
  const [data, setData] = useState([]);

  const instance = axios.create({
    baseURL: 'http://api.products.luezoid.com',
    headers: {'Authorization': 'Bearer ULxG9gG98KDGPql/BFI/woCN9T8='}
  });
  
  instance.get('/products?page=2')
  .then(response => {
    setData(response.data.data.items)
  })

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <DashBoard data={data} />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
