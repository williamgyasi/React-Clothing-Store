import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'
import { pullCollectionInstance,collectionQueries,convertCollectionSnapshotMap } from '../../Firebase/firebase.utils'
import { collection,onSnapshot } from '@firebase/firestore'
import { connect } from 'react-redux'
import { UPDATE_COLLECTIONS } from '../../Redux/Shop/shopActions'
import { withSpinner } from '../../HOCs'
import { CollectionOverivew, CollectionPreview } from '../../Components'
import { createStructuredSelector } from 'reselect'
import { fetchCollectionStartAsync } from '../../Redux/Shop/shopActions'
import { isFetchingSelector,selectIsCollectionLoaded } from '../../Redux/Shop/shopSelector'

const CollectionsOverviewWithSpinner=withSpinner(CollectionOverivew);
const CollectionPageWithSpinner=withSpinner(Collection)

const Shop =({match,isCollectionFetching,fetchCollectionStartAsync,selectIsCollectionLoaded})=>{
    
    useEffect(()=>{
        fetchCollectionStartAsync()
    },[fetchCollectionStartAsync])
    
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={!selectIsCollectionLoaded} {...props} />} />
            <Route path={`${match.path}/:categoryID`} 
            render={(props)=><CollectionPageWithSpinner isLoading={!selectIsCollectionLoaded} {...props} />} />
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    isCollectionFetching:isFetchingSelector,
    selectIsCollectionLoaded:selectIsCollectionLoaded
})

const mapDispatchToProps=dispatch=>({
    fetchCollectionStartAsync:()=>dispatch(fetchCollectionStartAsync())
})


export default connect(mapStateToProps,mapDispatchToProps)(Shop)