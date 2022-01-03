import React from 'react'
import './loginregister.styles.scss'
import { Login,Register } from '../../Components'

const LoginAndRegister=()=>{
    return(
        <div className="loginRegister">
            <Login />
            <Register />
        </div>
    )
}

export default LoginAndRegister;