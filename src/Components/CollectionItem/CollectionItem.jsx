import React from 'react'
import './style.scss'
import { Button } from '../../Components/index'

const CollectionItem=({id,name,price,imageUrl})=>{
    return(
        <div className="collection-item">
            <div 
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            className="image" />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                <Button className="button">Add To Cart</Button>
        </div>
    )
}

export default CollectionItem