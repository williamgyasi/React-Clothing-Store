import React,{useState} from "react";
import {HOME_SECTIONS} from "../../Store"

import { MenuItem } from "../index";

import './directory.style.scss'


const Directory=()=>{
        return(
        <div className="directory-menu">
            {
                HOME_SECTIONS.map(({title,imageUrl,id,size})=>(
                    <MenuItem key={id} title={title.toUpperCase()} size={size} imageUrl={imageUrl} />
                ))
            }
        </div>
    )
}

export default Directory;