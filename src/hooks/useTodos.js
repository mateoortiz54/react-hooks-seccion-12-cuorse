import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = []
export const useTodos=()=> {


    // Función para iniciar el valor, creo, y que comúnmente se le llama init
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    // inicializamos el useReducer 
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)   

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] add Todo',
            payload: todo,
        }
        // todos = todoReducer(todos, action)
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }

    const onToggleTodo = (id)=>{
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }


  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
}
    
}
