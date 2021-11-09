import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'
import { pullCollectionInstance } from '../../Firebase/firebase.utils'

const Shop =({match})=>{
    useEffect(()=>{
        const collection = pullCollectionInstance();
        console.log(collection)
       
    },[])
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryID`} component={Collection} />
        </div>
    )
}


export default Shop