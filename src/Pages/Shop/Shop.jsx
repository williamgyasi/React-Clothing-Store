import React from 'react'

import { CollectionPreview } from '../../Components'
import { createStructuredSelector } from 'reselect'
import { selectShopData } from '../../Redux/Shop/shopSelector'
import { connect } from 'react-redux'

import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'

const Shop =({SHOP_DATA})=>{
    
    return(
        <div className="shop-page">
           <CollectionsOverview />
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    SHOP_DATA:selectShopData
})

export default connect(mapStateToProps) (Shop)