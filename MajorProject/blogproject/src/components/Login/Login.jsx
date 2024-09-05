import React, { useDebugValue, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {login as authlogin} from '../../store/authSlice'
import {Button,Input,Logo} from '../index'
import { useDispatch } from "react-redux";
import authService from '../../appwriteService/auth'
import {useForm} from 'react-hook-form'

function Login(){
const navigate=useNavigate()
const dispatch=useDispatch()
const {register,handleSubmit}=useForm()
const [error,setError]=useState("")

const login=async(data)=>{
    setError("")
    try {
        const session=await authService.login(data)
        if(session){
            const userData=await authService.getCurrentUser()
            if(userData){
                dispatch(authlogin(userData));

            }
            navigate("/")
        }
    } catch (error) {
        setError(error.message)
        
    }
}
    return(
       <div
       className="flex items-center justify-center w-full"
       >
        <div className="mb-2 flex justify-center">
            <span
            className="inline-block w-full max-w-[100px]">
                <Logo width="100%"/>
            </span>
        
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your Account</h2>
        <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
        to="/signup"
        className="font-medium text-primary transition-all duration-200 hover:underline">
            Sign Up
            </Link>
            </p>
            {
                error && <p className="text-red-600 mt-0 text-center">{error}</p>
            }
            <form 
            onSubmit={handleSubmit(login)}
            className="mt-8">
                <div className="space-y-5">
                    <Input
                    label="Email"
                    placeholder="Enter Your Email"
                    type="emai"
                    {...register("email",{
                        required:true,
                        validate:{
                            matchPater:(value)=>
                                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g. test(value)||// regex values for check email and '||' is OR operater
                            
                            "Email address must be a valid",
                        }
                    })}// spread operator is compulsory, if we diddnt use spread operator the value of register are overwrited thats why we can use spread operator
                    />
                </div>
            </form>
       </div>
       </div>
    )
}
export default Login

