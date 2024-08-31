// import { useState,useEffect } from "react";



// //custom hooks means user created hooks
// function useCurrencyInfo(currency){


//     useEffect(()=>{

// const [data,setData]=useState({})//empty object


//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

//         .then((res)=>{
//             // /res.JSON.parse() //or
//             res.json()

//         })
//         .then((res)=>{
//             setData(res[currency])
//         })
//             console.log(data);
            

//     },[currency])// it can call fetch method automatically, it can use when some one is call or invoked that fucntion then the useEffect are work

// console.log(data)
//     return data
// }

// export default useCurrencyInfo



import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;