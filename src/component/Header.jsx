import React from "react";
import { ShoppingTwoTone } from "@ant-design/icons";
import { Affix, Badge } from "antd";
import Logo from "../assets/logo.jpg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <Affix>
      <div className="appBar">
        <img
          onClick={() => history.push("/")}
          style={{ width: "4rem", borderRadius: "10px", cursor: "pointer" }}
          src={Logo}
          alt=""
        />
        <div className="text">Header / رأس/ शीर्षणी</div>
        <Badge count={1}>
          <ShoppingTwoTone style={{ fontSize: "2rem" }} />
        </Badge>
      </div>
    </Affix>
  );
};

export default Header;
