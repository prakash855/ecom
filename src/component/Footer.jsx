import { ShoppingCartOutlined } from "@ant-design/icons";
import { Affix } from "antd";
import React from "react";

const Footer = () => {
  return (
    <Affix offsetBottom="0">
      <div className="appBar">
        <div className="logo">logo</div>
        <div className="text">Header</div>
        <ShoppingCartOutlined />
      </div>
    </Affix>
  );
};

export default Footer;
