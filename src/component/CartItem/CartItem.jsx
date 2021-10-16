import { Card } from "antd";
import React from "react";
import "./CartItem.css";
// const { Meta } = Card;
const CartItem = ({ about }) => {
  return (
    <Card type="inner">
      <div className="cartItem">
        <img src={about.bannerImage.url} alt="" className="cartimg" />
        <div className="cartDesc">
          <b>{about.name}</b>
          <b>{about.price}</b>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
