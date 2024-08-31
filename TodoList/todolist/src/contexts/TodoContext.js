import { useContext, createContext } from "react";

export const TodoContext=createContext({
    todo:[
        {
            id:1,
            todo:"Todo message",
            completed:false,
        }
    ],
    addTodo:()=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}// these all are context methods which is define ourself
})

export const useTodo=()=>{
    return useContext(TodoContext)// when we take useContext then we have to give that a context
}

export const TodoProvider=TodoContext.Provider