import React from "react";
import './menuItem.style.scss'

const MenuItem = ({title,imageUrl,size}) => {
  return (
    <div  className={`${size} menu-item`}>
      <div 
      style={{
        backgroundImage:`url(${imageUrl})`,
      }}
      className="background-image"></div>
      <div className="content">
        <h1 className="content-title">{title}</h1>
        <span className="content-subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
