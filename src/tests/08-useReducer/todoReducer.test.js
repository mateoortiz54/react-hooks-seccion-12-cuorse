import { todoReducer } from "../../08-useReducer/todoReducer"


describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id:1,
        description: 'Todo Description',
        done:false
    }]

    test('debe de regresar el estado inicial', () => {

        const newSate = todoReducer(initialState, {})
        expect(newSate).toBe(initialState);

    });

    test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] add Todo',
            payload: {
                id: 2,
                description: 'Add new Todo',
                done: false,
            }
        }

        const newSate = todoReducer(initialState, action)

        expect(newSate.length).toBe(2);
        expect(newSate).toContain(action.payload);

    });

    test('debe de eliminar un TODO', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1,
        }

        const newSate = todoReducer(initialState, action)

        expect(newSate.length).toBe(0);
        expect(newSate).not.toContain(initialState);
        
    });

    test('debe de realizar el Toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        }

        const newSate = todoReducer(initialState, action)
        console.log(newSate);
        expect(newSate[0].done).toBeTruthy()


    })


})