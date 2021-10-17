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

  var config = {
    method: "get",
    url: "https://api.products.luezoid.com/products?page=2",
    headers: {
      Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  };

  // useEffect(() => {
  axios(config)
    .then(function (response) {
      setData(response.data.data.items);
    })
    .catch(function (error) {
      console.log(error);
    });
  // }, []);

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
