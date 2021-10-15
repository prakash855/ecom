import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

const Details = () => {
  return (
    <Card title="Card title">
      <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
        Inner Card content
      </Card>
    </Card>
  );
};

export default Details;
