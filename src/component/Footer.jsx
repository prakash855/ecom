import { ShoppingCartOutlined } from "@ant-design/icons";
import { Affix } from "antd";
import React from "react";
import Logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <Affix>
      <div className="appBar">
        <div>Footer</div>
        <div className="text">تذييل</div>
        <div>पाद लेख</div>
      </div>
    </Affix>
  );
};

export default Footer;
