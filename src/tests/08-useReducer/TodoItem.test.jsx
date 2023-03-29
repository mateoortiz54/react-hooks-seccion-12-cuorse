import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {
    const todo = {
        id: 1,
        description: 'Description Todo',
        done: false,
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    // si voy a utilizar estas funciones para varios test, entonces se recomienda resetearlas
    beforeEach(()=> jest.clearAllMocks());


    test('debe de mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock} 
            />);
        const liElement = screen.getByRole('listitem'); //<li></li>
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        // en este caso se deja un espacio al final debido a que se le tiene un condicional
        expect(spanElement.className).toBe('align-self-center ');
        // También se puede de la siguiente manera
        // expect(spanElement.className).toContain('align-self-center') 
        // Si se opta por esta manera, al ser un toContain entonces no es del todo preciso
        // por lo cual se tiene que hacer otra validación:
        // expect(spanElement.className).not.toContain('text-decoration-line-through')

    });

    test('debe de mostrar el Todo completado', () => {

        todo.done= true;

        render(<TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock} 
            />);
        const liElement = screen.getByRole('listitem'); //<li></li>
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');


    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock} 
        />);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        // expect(onToggleTodoMock).toHaveBeenCalled();
        expect(onToggleTodoMock).toHaveBeenCalled();
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)


    })
    test('el btn debe de llamar el DeleteTodo cuando se hace click', () => {
        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock} 
        />);
        // const spanElement = screen.getByLabelText('span');
        const btn = screen.getByRole('button', {name: 'Borrar'})
        fireEvent.click(btn);

        expect(onDeleteTodoMock).toHaveBeenCalled();
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)


    })

})