import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){

    const  [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
e.preventDefault()
setUser({username,password})
    }
    return (
        <div className=" text-white font-extrabold justify-center">
            <h1>Login</h1>
            <br />
            <br />
            <input type="text"
            className="bg-gray-300 text-black border border-black border-dotted text-justify-center font-semibold w-50px h-60px"
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value)
            }} placeholder='username' />
            {" "}
            <input type="text"
            className="bg-gray-300 text-black border border-black border-dotted font-semibold"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)}} placeholder='password' />
                <br />
                <br />
            <button onClick={handleSubmit} className="bg-blue-500 border border-solid font-bold">Submit</button>

        </div>
    )
}

export default Login



