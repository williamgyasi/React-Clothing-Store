import React from "react";
import { CollectionItem } from "../../Components";
import './collection.styles.scss'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/Shop/shopSelector";

const Collection=({collection})=>{
    console.log(collection)
    const{title,items}=collection;
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item=>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.categoryID)(state)
})

export default connect(mapStateToProps) (Collection)