import React,{useState} from 'react'

import { FormInput,Button } from '../index'

import { auth } from '../../Firebase/firebase.utils'
import './register.styles.scss'

const Register =()=>{
    const [displayName,setDisplayName]=useState(" ")
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState(" ")
    const [confirmPassword,setConfirmPassword]=useState(" ")

    const handleSubmit=()=>{
        console.log("ahah")
    }

    const handleChange=(event)=>{
        
    }

    return(
        <div className="register">
          <h2 className="title">I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className="register-form" onSubmit={handleSubmit}>
              <FormInput
              type="text"
              name="displayname"
              value={displayName}
              onChange={handleChange}
              label="Display name"
              required
              />
              <FormInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              label="Email"
              required
              />
              <FormInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              label="Password"
              required
              />
              <FormInput
              type="password"
              name="password"
              value={confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              required
              />

            <Button type="submit">Sign Up</Button>
          </form>

        </div>
    )
}

export default Register