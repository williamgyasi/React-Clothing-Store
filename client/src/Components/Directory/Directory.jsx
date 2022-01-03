import React,{useState} from "react";
import {HOME_SECTIONS} from "../../Store"

import { connect } from "react-redux";
import { MenuItem } from "../index";
import { createStructuredSelector } from "reselect";

import { selectSections } from "../../Redux/Directory/directorySelector";
import './directory.style.scss'


const Directory=({sections})=>{
        return(
        <div className="directory-menu">
            {
                sections.map(({id,...sectionProps})=>(
                    <MenuItem
                     key={id} 
                     {...sectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    sections:selectSections
})

export default connect(mapStateToProps)(Directory);