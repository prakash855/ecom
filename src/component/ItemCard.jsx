import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import {useHistory} from 'react-router-dom'

const { Meta } = Card;

const ItemCard = ({ src, description, name }) => {
  const history = useHistory()
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
        <img
        onClick={()=>history.push('/details')}
          style={{ width: "15rem", height: "15rem" }}
          alt="example"
          src={src}
        />
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
