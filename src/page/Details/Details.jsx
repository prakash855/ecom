import React from "react";
import "antd/dist/antd.css";
import { Button, Card, message } from "antd";
import { useLocation, useHistory } from "react-router-dom";
import {
  CheckOutlined,
  CloseOutlined,
  LeftCircleTwoTone,
  SmileOutlined,
} from "@ant-design/icons";
import "./Details.css";

const Details = () => {
  
  const history = useHistory();
  const data = useLocation();
  const { state } = data;
  const time = state.time.split("-").reverse().join("-");

  const available =
    state.available === "APPROVED"
      ? [
          <CheckOutlined style={{ fontSize: "1rem" }} />,
          "Available at your Pin Code",
        ]
      : [<CloseOutlined />, "Not Available"];

  const buyNowHandler = () => {
    message.success([
      "Congratulations! Your order is placed",
      <SmileOutlined style={{ marginLeft: "0.5rem" }} />,
    ]);
  };

  return (
    <Card title={state.name}>
      <LeftCircleTwoTone
        onClick={() => history.goBack()}
        style={{ fontSize: "2rem", marginBottom: "1rem" }}
      />
      <Card type="inner" title={`Category: ${state.category}`}>
        <div className="details">
          <img className="detailsPicture" src={state.src} alt="" />
          <div className="description">
            <h2>Description:</h2>
            <h3>{`Product ID:${state.id}`}</h3>
            <b>
              About: <span className="desc">{state.description}</span>
            </b>
            <p>{`Launched at: ${time}`}</p>

            <b className="price">{`Price: ${state.price}د.إ`}</b>
            {/* currency in dubai is dirham, wich is written as د.إ */}

            <b>{`Contact Number of the Seller: ${state.phone}`}</b>
            <b className="avail">{available}</b>
          </div>
        </div>
        <Button type="primary" onClick={buyNowHandler}>
          Buy Now
        </Button>
      </Card>
    </Card>
  );
};

export default Details;
