import { TodoItem } from "./TodoItem"


export const TodoList = ({listTodos, onDeleteTodo, onToggleTodo})=> {
  return (
    <ul className="list-group">
      {
          listTodos.map(todo=>(
              // TodoItem
              <TodoItem 
                todo={todo}
                key={todo.id}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo} />
              
          ))
      }
    </ul>
  )
}
