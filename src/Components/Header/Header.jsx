import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import {ReactComponent as Logo} from '../../Assets/shop-svgrepo-com.svg'
import { auth } from '../../Firebase/firebase.utils'

const Header=({currentUser})=>{
    // console.log("!!!!!!!!!!!!!")
    // console.log(currentUser.photoURL)
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
                       <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                      
                    ):
                    (
                        <Link className="option" to="/signin">Login</Link>
                    )
                }
                
                
            </div>
        </div>
    )
}

export default Header