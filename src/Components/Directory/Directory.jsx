import React,{useState} from "react";
import {HOME_SECTIONS} from "../../Store"

import { MenuItem } from "../index";

import './directory.style.scss'


const Directory=()=>{
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

export default Directory;