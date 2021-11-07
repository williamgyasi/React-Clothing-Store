import React from "react";
import './collections.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../Redux/Shop/shopSelector";
import { CollectionPreview } from "../index";

const CollectionOverview=({SHOP_DATA})=>{
    return(
        <div className="collections-overview">
            {
                SHOP_DATA.map(({id,...otherSubs})=>(
                    <CollectionPreview key={id} {...otherSubs}/>
                ))
            }
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    SHOP_DATA:selectShopData
})


export default connect(mapStateToProps) (CollectionOverview);