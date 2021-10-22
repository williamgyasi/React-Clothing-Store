import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import {ReactComponent as Logo} from '../../Assets/shop-svgrepo-com.svg'

const Header=()=>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/contact">
                    Contact
                </Link>
                
            </div>
        </div>
    )
}

export default Header