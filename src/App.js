import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  var config = {
    method: "get",
    url: "http://api.products.luezoid.com/products?page=2",
    headers: {
      Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
    },
  };

  axios(config)
    .then(function (response) {
      setData(response.data.data.items);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="App">
      {data.map((d) => (
        <h1>{d.name}</h1>
      ))}
    </div>
  );
}

export default App;
