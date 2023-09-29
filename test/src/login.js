import React, { useState } from "react";
const Login=()=>{
    const[data,setData]=useState({
        username:'',
        password:''
    })
    const{username,password}=data;
    const onchange=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const onsubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }
return(
    <div className="border">
        {
            <center>
                <p className="h4">Login</p>
                <form onSubmit={onsubmit} >
                    <input type="text" name="username" value={username} placeholder="username" onChange={onchange}/><br/><br/>
                    <input type="password" name="password" value={password} placeholder="password" onChange={onchange}/><br></br>
                    <br></br><input type="submit" name="submit"/>
                </form>
            </center>
        }
    </div>
)
}
export default Login;