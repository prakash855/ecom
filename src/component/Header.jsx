import React from "react";
import { ShoppingTwoTone } from "@ant-design/icons";
import { Affix } from "antd";

const Header = () => {
  return (
    <Affix>
      <div className="appBar">
        <div className="logo">logo</div>
        <div className="text">Header</div>
        <div style={{ display: "flex" }}>
          <ShoppingTwoTone style={{ fontSize: "2rem" }} />
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
