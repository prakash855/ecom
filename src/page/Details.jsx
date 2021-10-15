import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <Card title="Card title">
      <Card type="inner" title="Inner Card title" extra={<Link>More</Link>}>
        Inner Card content
      </Card>
    </Card>
  );
};

export default Details;
