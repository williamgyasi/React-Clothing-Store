import React from "react";
import { CollectionItem } from "../../Components";
import './collection.styles.scss'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/Shop/shopSelector";

const Collection=({match})=>{
    console.log(match.params.categoryID,"catehory")
    return(
        <div className="collection-page">
            <h2>Collection PAGE</h2>
        </div>
    )
}

const mapStateToProps=createStructuredSelector({

})

export default  Collection