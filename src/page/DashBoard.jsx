import React from "react";
import ItemCard from "../component/ItemCard";

const DashBoard = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {data.map((eachItem) => (
        <ItemCard
          price={eachItem.price}
          time={eachItem.createdAt.split(" ")[0]}
          id={eachItem.id}
          category={eachItem.category.name}
          src={eachItem.bannerImage.url}
          description={eachItem.description}
          name={eachItem.name}
          phone={eachItem.phone}
          available={eachItem.status}
        />
      ))}
    </div>
  );
};

export default DashBoard;
