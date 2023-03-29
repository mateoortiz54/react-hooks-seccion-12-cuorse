import { render, screen } from "@testing-library/react"
import { UserContext } from "../../09-useContext/context/UserContext"
import { HomePage } from "../../09-useContext/HomePage"


describe('Pruebas en <HomePage/>', () => {
    const user = {
        id: 1, 
        name: 'Mateo'
    }
    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
        // screen.debug();
    });

    test('debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        )
        screen.debug(); 
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(user.name)
        // No funciona enviarlo como number ya que lo imprime en el html como string
        // podemos pasarlo a string: user.id.toString() o podemos hacer lo siguiente
        expect(preTag.innerHTML).toContain(`${user.id}`)
        

    })
})