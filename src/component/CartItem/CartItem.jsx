import { Card } from "antd";
import React from "react";
import "./CartItem.css";

const CartItem = ({ about }) => {
  return (
    <Card type="inner">
      <div className="cartItem">
        <img src={about.bannerImage.url} alt="" className="cartimg" />
        <div className="cartDesc">
          <b className="desc">{about.name}</b>
          <b className="price">Price: {about.price}د.إ</b>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
