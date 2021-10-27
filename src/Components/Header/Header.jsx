import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import {ReactComponent as Logo} from '../../Assets/shop-svgrepo-com.svg'
import { logOutUser } from '../../Firebase/firebase.utils'

import { connect } from 'react-redux'

import { CartIcon,CartDropdown } from '../index'

const Header=({currentUser})=>{
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
                
                {
                    currentUser?
                    (
                       <div className="option" onClick={()=>logOutUser}>Sign Out</div>
                      
                    ):
                    (
                        <Link className="option" to="/signin">Login</Link>
                    )
                }
                <CartIcon />
                
                
            </div>
            <CartDropdown />
        </div>
    )
}

const mapStateToProps=state=>({
    currentUser:state.USER_REDUCER.currentUser
})

export default connect(mapStateToProps)(Header)