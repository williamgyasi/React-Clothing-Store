import React,{useState} from 'react'
import './login.styles.scss'

const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const resetFields=()=>{

    }

    const handleUserAccountChange=(event)=>{
        event.preventDefault()
        const{name,value}=event.target
        user[name]=value
        console.log(user)
        // setUser(user)
        setUser(user)
    }


    const handleSubmit=(event)=>{
        event.preventDefault();

        setEmail("")
        setPassword("")
    }

    const handleChange=(event)=>{
        const {value,name}=event.target;
        console.log(event.target.name)
        
    }

    return(
        <div onSubmit={handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form action="">
                <input 
                name="email" 
                type="email" 
                value={user[email]}
                onChange={handleUserAccountChange}
                 required />
                <label>Email</label>

                <input 
                name="password" 
                type="password" 
                value={user[password]} 
                required
                onChange={handleUserAccountChange} 
                />
                <label>Password</label>

                <input type="submit" value="Submit Form"/>
            </form>
        </div>
    )
}

export default Login