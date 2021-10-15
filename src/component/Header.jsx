import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Affix } from "antd";

const Header = () => {
  return (
    <Affix>
      <div className="appBar">
        <div className="logo">logo</div>
        <div className="text">Header</div>
        <ShoppingCartOutlined />
      </div>
    </Affix>
  );
};

export default Header;
