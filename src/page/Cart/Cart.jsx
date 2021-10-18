import { Card } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import CartItem from "../../component/CartItem/CartItem";
import LocationLogo from "../../assets/location.png";

const Cart = () => {
  const data = useLocation();
  const { state } = data;
  const { singleItem } = state;

  return (
    <Card
      title="Card title"
      extra={
        <Link>
          <img style={{width:"2rem"}} src={LocationLogo} alt="" />
          Deliver to
        </Link>
      }
    >
      <CartItem about={singleItem} />
    </Card>
  );
};

export default Cart;
