import React,{useState} from 'react'

import { FormInput,Button } from '../index'

import { auth,createUser } from '../../Firebase/firebase.utils'
import './register.styles.scss'

const Register =()=>{
    // const [account,setAccount]=useState({
    //     diplayname:"",
    //     email:"",   
    //     password:"",    
    //     confirmPassword:"",
    // })
    const [displayName,setDisplayName]=useState(" ")
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState(" ")
    const [confirmPassword,setConfirmPassword]=useState(" ")

    
    const handleSubmit=async()=>{
        // console.log("CURE")
        if(password!==confirmPassword){
            alert('password no y3 problem')
            return;
        }
        try {

            await createUser(email,password,displayName)
            // setDisplayName("")
            // email("")
            // password("")
            // confirmPassword("")
        } catch (error) {
            console.log("ISSUE WITH SUBMITTING USER",error.message)
        }
        
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
              onChange={(e)=>setDisplayName(e.target.value)}
              label="Display name"
              required
              />
              <FormInput
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              label="Email"
              required
              />
              <FormInput
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              label="Password"
              required
              />
              <FormInput
              type="password"
              name="confirmpassword"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              label="Confirm Password"
              required
              />

            <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
          </form>

        </div>
    )
}

export default Register