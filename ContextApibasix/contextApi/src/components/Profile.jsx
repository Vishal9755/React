import React,{useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user}=useContext(UserContext)

    if(!user) return <div className="bg-blue-400 border border-solid font-bold h-60px w-50px">please login</div>

    return <div className="">Welcome {user.username}</div>
}
export default Profile