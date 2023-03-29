export const todoReducer = (initialState = [], action)=> {

    switch (action.type) {
        case '[TODO] add Todo':
            
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            //Se le envia el id del todo en el payload
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map(todo =>{

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            })
        default:
            return initialState;
    }

}