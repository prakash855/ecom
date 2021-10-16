import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ItemCard = ({
  id,
  src,
  description,
  name,
  category,
  time,
  price,
  phone,
  available,
}) => {
  return (
    <Card
      hoverable
      className="card"
      style={{
        width: 240,
        margin: "2rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      cover={
        <Link
          to={{
            pathname: "/details",
            state: {
              src,
              description,
              name,
              category,
              id,
              time,
              price,
              phone,
              available,
            },
          }}
        >
          <img
            className="image"
            style={{ width: "15rem", height: "15rem" }}
            alt="example"
            src={src}
          />
        </Link>
      }
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Meta
          title={name.slice(0, 15)}
          description={description.slice(0, 40)}
        />
        <PlusCircleTwoTone style={{ fontSize: "2rem" }} />
      </div>
    </Card>
  );
};

export default ItemCard;
