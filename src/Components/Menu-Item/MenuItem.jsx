import React from "react";
import './menuItem.style.scss'

const MenuItem = ({title}) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="content-title">{title}</h1>
        <span className="content-subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
