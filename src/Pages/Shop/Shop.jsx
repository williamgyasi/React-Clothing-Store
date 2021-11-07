import React from 'react'

import { CollectionPreview } from '../../Components'
import { createStructuredSelector } from 'reselect'
import { selectShopData } from '../../Redux/Shop/shopSelector'
import { connect } from 'react-redux'

const Shop =({SHOP_DATA})=>{
    
    return(
        <div className="shop-page">
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

export default connect(mapStateToProps) (Shop)