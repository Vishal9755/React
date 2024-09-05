import React from "react";
import appwriteService from '../../appwriteService/config'
import { Link } from "react-router-dom";

function PostCard({
    $id,title,featuredImage// to pass parameter in appwrite we have to write id with $ sign it is the syntax of appwrite
}){
    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    className="rounded-xl" />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}