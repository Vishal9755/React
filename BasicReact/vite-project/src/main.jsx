import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from 'react/jsx-runtime.js'// also we can import jsx
/*
function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
} here we can also create a own function and execute it


const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click to visit google'
}// we can not define method like this
*/
const anotherElement=(
    <a href="https://google.com " target='_blank'>Visit google</a>
)

const anotherUser="vishal"

const reactElement=React.createElement(// it takes parameter// when we creat a method we dont have to write a name we can directly wriites value. we can define methods like this.
    'a',// tag name
    {href:'https://google.com',
        target:'_blank'
    },//object (setAttribute)
    'click me to visit google',//text
    anotherUser
)



ReactDom.createRoot(document.getElementById('root')).render(
//  MyApp()// it is also use bcz it is a function only for knowledge
    
   
// anotherElement
reactElement


 
)
