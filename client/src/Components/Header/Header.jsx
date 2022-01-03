import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {ReactComponent as Logo} from '../../Assets/shop-svgrepo-com.svg'
import { logOutUser } from '../../Firebase/firebase.utils'
import { CartIcon,CartDropdown } from '../index'
import './header.style.scss'
import { selectHiddenState } from '../../Redux/Cart/selector'
import { selectCurrenUser } from '../../Redux/User/selector'

const Header=({currentUser,hidden})=>{
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
            {hidden?null:(<CartDropdown />)}
           
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrenUser,
    hidden:selectHiddenState
})

export default connect(mapStateToProps)(Header)