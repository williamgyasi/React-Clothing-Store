import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'
import { pullCollectionInstance,collectionQueries,convertCollectionSnapshotMap } from '../../Firebase/firebase.utils'
import { collection,onSnapshot } from '@firebase/firestore'
import { connect } from 'react-redux'
import { UPDATE_COLLECTIONS } from '../../Redux/Shop/shopActions'
const Shop =({match,updateCollections})=>{
    useEffect(()=>{
        const subscribe=onSnapshot(collectionQueries,async(querySnapshot)=>{
            const collectionMap=convertCollectionSnapshotMap(querySnapshot)
            updateCollections(collectionMap)
        })
       
    },[])
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryID`} component={Collection} />
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    updateCollections:collectionMap=>dispatch(UPDATE_COLLECTIONS(collectionMap))
})


export default connect(null,mapDispatchToProps)(Shop)