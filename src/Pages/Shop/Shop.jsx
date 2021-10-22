import React from 'react'
import { SHOP_DATA } from '../../Store'

import { CollectionPreview } from '../../Components'

const Shop =()=>{
    
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

export default Shop