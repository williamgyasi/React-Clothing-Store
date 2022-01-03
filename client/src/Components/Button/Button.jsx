import React from 'react'
import './button.styles.scss'

const Button =({children,isGoogleSignIn,...otherProps})=>{
    return(
        <div  
        className={`${isGoogleSignIn?"google-signin":""} button`} {...otherProps}>
           {children}
        </div>
    )
}

export default Button;