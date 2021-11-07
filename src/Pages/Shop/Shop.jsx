import React, { Component } from 'react'

import { CollectionPreview } from '../../Components'
import { createStructuredSelector } from 'reselect'
import { selectShopData } from '../../Redux/Shop/shopSelector'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'

const Shop =({match})=>{
    
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryID`} component={Collection} />
        </div>
    )
}


export default Shop