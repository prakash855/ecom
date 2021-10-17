import { Card } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import CartItem from "../../component/CartItem/CartItem";

const Cart = () => {
  
  const data = useLocation();
  const { state } = data;
  const { singleItem } = state;
  
  return (
    <Card title="Card title" extra={<Link>Deliver to</Link>}>
      <CartItem about={singleItem} />
    </Card>
  );
};

export default Cart;
