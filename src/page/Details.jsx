import React from "react";
import "antd/dist/antd.css";
import { Button, Card, message, Alert } from "antd";
import { useLocation } from "react-router-dom";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const Details = () => {
  const data = useLocation();
  const { state } = data;
  console.log(state.time);
  return (
    <Card title={state.name}>
      <Card type="inner" title={`Category: ${state.category}`}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <img
            style={{ maxWidth: "60rem", maxHeight: "50rem" }}
            src={state.src}
            alt=""
          />
          <div className="description">
            <h2>Description:</h2> <br />
            <h3>{`Product ID:${state.id}`}</h3>
            <b className="desc">{`About: ${state.description}`}</b>
            <p>{`Launched at: ${state.time}`}</p>
            <b>{`Price: ${state.price}د.إ`}</b>
            {/* currency in dubai is dirham, wich is written as د.إ */}
            <br />
            <b>{`Contact Number of the Seller: ${state.phone}`}</b>
            <h4>
              {state.available === "APPROVED"
                ? [
                    <CheckOutlined style={{ fontSize: "1rem" }} />,
                    "Available at your Pin Code",
                  ]
                : [<CloseOutlined />, "Not Available"]}
            </h4>
          </div>
        </div>
        <Button
          onClick={() =>
            message.success("Congratulations! Your order id placed")
          }
        >
          Buy Now
        </Button>
      </Card>
    </Card>
  );
};

export default Details;
