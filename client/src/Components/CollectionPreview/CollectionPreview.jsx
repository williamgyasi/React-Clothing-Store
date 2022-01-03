import React from "react";
import "./styles.scss";
import { CollectionItem } from "../index";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        .filter((item,index)=>index<4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} name={item.name} price={item.price} imageUrl={item.imageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
