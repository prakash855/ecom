import React from "react";
import { ShoppingTwoTone } from "@ant-design/icons";
import { Affix } from "antd";
import Logo from "../assets/logo.jpg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <Affix>
      <div className="appBar">
        <img
          onClick={() => history.push("/")}
          style={{ width: "4rem", borderRadius: "10px" }}
          src={Logo}
          alt=""
        />
        <div className="text">Header / رأس/ शीर्षणी</div>
        <div style={{ display: "flex" }}>
          <ShoppingTwoTone
            onClick={() => history.push("/cart")}
            style={{ fontSize: "2rem" }}
          />
          <sup
            style={{
              border: "1px solid",
              width: "1.2rem",
              height: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "red",
            }}
          >
            0
          </sup>
        </div>
      </div>
    </Affix>
  );
};

export default Header;
