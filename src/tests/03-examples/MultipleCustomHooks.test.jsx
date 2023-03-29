import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples"
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";


jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('pruebas en <MultipleCustomHooks>', () => {
    const functionInc = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: functionInc,
    })
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        })
        render(<MultipleCustomHooks/>);
        // Necesitamos evaluar el componente por defecto, sin ningún cambio
        // Lo podemos hacer con el tipico snapshoot, pero ahora veremos una forma 
        // diferente
        // screen.debug();
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Rick and Morty character'))

        const nextButton = screen.getByRole('button', {name: 'Next character'})
        expect(nextButton.disabled).toBeTruthy();

    });
    test('debe de mostrar un character', () => {
        useFetch.mockReturnValue({
            data: {name: 'Mateo Ortiz', status: 'alive'},
            isLoading: false,
            hasError: null,
        })
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('alive')).toBeTruthy();
        expect(screen.getByText('Mateo Ortiz')).toBeTruthy();

        const nextBtn = screen.getByRole('button', {name: 'Next character'})

        expect(nextBtn.disabled).toBeFalsy();


    });
    test('debe de llamar la función de incrementar', () => {
        useFetch.mockReturnValue({
            data: {name: 'Mateo Ortiz', status: 'alive'},
            isLoading: false,
            hasError: null,
        })
        render(<MultipleCustomHooks/>);
        // screen.debug();
        const nextBtn = screen.getByRole('button', {name: 'Next character'})
        fireEvent.click(nextBtn);
        screen.debug();

        expect(functionInc).toHaveBeenCalled();

    })
});