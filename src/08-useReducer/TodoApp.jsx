import { useEffect, useReducer } from "react"
import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() *3,
    //     description: 'Recolectar la piedra del tiempo',
    //     done: false
    // },
]

export const TodoApp = () => {

    const {todos,todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, onToggleTodo} = useTodos();

    

  return (
    <>  
        <h1>TodoApp {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/*TodoList*/}
                <TodoList 
                    listTodos={todos}
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={onToggleTodo}/>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd onNewTodo(todo)*/}

                <TodoAdd onNewTodo={handleNewTodo}/>
                
            </div>
        </div>


        
        
    </>
  )
}
