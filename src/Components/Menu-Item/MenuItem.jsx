import React from "react";
import './menuItem.style.scss'
import { withRouter } from "react-router-dom";

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => {
  
  return (
    <div  
    onClick={()=>history.push(`${match.url}${linkUrl}`)}
    className={`${size} menu-item`}>
      <div 
      style={{
        backgroundImage:`url(${imageUrl})`,
      }}
      className="background-image"></div>
      <div className="content">
        <h1 className="content-title">{title.toUpperCase()}</h1>
        <span className="content-subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
