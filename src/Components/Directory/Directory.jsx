import React,{useState} from "react";
import {HOME_SECTIONS} from "../../Store"

import { connect } from "react-redux";
import { MenuItem } from "../index";

import './directory.style.scss'


const Directory=({sections})=>{
        return(
        <div className="directory-menu">
            {
                HOME_SECTIONS.map(({id,...sectionProps})=>(
                    <MenuItem
                     key={id} 
                     {...sectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps=({CART_REDUCER:sections})=>({
    section:sections
})

export default connect()(Directory);