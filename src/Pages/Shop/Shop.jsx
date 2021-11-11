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

const CollectionsOverviewWithSpinner=withSpinner(CollectionOverivew);
const CollectionPageWithSpinner=withSpinner(Collection)

const Shop =({match,updateCollections})=>{
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const subscribe=onSnapshot(collectionQueries,async(querySnapshot)=>{
            const collectionMap=convertCollectionSnapshotMap(querySnapshot)
            console.log(collectionMap)
            updateCollections(collectionMap)
            setLoading(false)
        })

       
    },[])
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:categoryID`} 
            render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    updateCollections:collectionMap=>dispatch(UPDATE_COLLECTIONS(collectionMap))
})


export default connect(null,mapDispatchToProps)(Shop)