import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../08-useReducer/TodoApp"
import { useTodos } from "../../hooks/useTodos"
jest.mock("../../hooks/useTodos")




describe('Pruebas en el <TodoApp/>', () => {

    useTodos.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false },
            {id: 2, description: 'Todo #2', done: true },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        onToggleTodo: jest.fn(),
    });

    test('Debe de mostrar el componente correctamente', () => {
        
        render(<TodoApp/>)
        // screen.debug();

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();

        // input
        expect(screen.getByRole('textbox')).toBeTruthy();
        // console.log(screen.getByRole('textbox').className)
    })



})