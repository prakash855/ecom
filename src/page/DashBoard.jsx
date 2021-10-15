import React from "react";
import ItemCard from "../component/ItemCard";

const DashBoard = ({ data }) => {
  console.log(data)
  return (
    <div
      style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
      }}
    >
      {data.map((eachItem) => (
        <ItemCard src={eachItem.bannerImage.url} description={eachItem.description} name={eachItem.name} />
      ))}
    </div>
  );
};

export default DashBoard;
