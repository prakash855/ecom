import React from "react";
import "antd/dist/antd.css";
import { Button, Card, message } from "antd";
import { useLocation } from "react-router-dom";
import { CheckOutlined, CloseOutlined, SmileOutlined } from "@ant-design/icons";

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
            style={{ maxWidth: "30rem", maxHeight: "30rem" }}
            src={state.src}
            alt=""
          />
          <div className="description">
            <h2>Description:</h2>
            <h3>{`Product ID:${state.id}`}</h3>
            <b className="desc">{`About: ${state.description}`}</b>
            <p>{`Launched at: ${state.time.split("-").reverse().join("-")}`}</p>
            <b>{`Price: ${state.price}د.إ`}</b>
            {/* currency in dubai is dirham, wich is written as د.إ */}

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
        type="primary"
          onClick={() =>
            message.success([
              "Congratulations! Your order is placed",
              <SmileOutlined style={{ marginLeft: "0.5rem" }} />,
            ])
          }
        >
          Buy Now
        </Button>
      </Card>
    </Card>
  );
};

export default Details;
