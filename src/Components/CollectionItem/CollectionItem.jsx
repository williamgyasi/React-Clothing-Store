import React from 'react'
import './style.scss'
import { Button } from '../../Components/index'
import { connect } from 'react-redux'

import { ADD_TO_CART } from '../../Redux/Cart/cartActions'

const CollectionItem=({id,name,price,imageUrl,item,add_to_cart})=>{
    
    return(
        <div 
        // onClick={()=>add_to_cart(item)}
         className="collection-item">
            <div 
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            className="image" />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                <Button
                  onClick={()=>add_to_cart(item)}
                  className="button">Add To Cart</Button>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    add_to_cart:(item)=>dispatch(ADD_TO_CART(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)