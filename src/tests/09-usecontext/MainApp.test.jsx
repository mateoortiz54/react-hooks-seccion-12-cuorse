import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import {MainApp} from '../../../src/09-useContext/MainApp'

describe('Pruebas en <MainApp>', () => {
    test('debe de mostrar el HomePage', () => {
        render(
            // renderizamos el MainApp junto al MemoryRouter ya que el main necesita todos los servicios
            // como lo son el href y y lo otro, esto es gracias al BrowserRouter que se encuentra en el main

            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>    
        )
        screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    })

    test('debe de mostrar el LoginPage', () => {
        render(
            // renderizamos el MainApp junto al MemoryRouter ya que el main necesita todos los servicios
            // como lo son el href y y lo otro, esto es gracias al BrowserRouter que se encuentra en el main

            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>    
        )
        screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    })
})