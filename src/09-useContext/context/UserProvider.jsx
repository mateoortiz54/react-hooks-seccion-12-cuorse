import { useState } from "react"
import { UserContext } from "./UserContext"

// const user ={
//     id: 123,
//     name: 'Carolina Herrera',
//     email: 'admmnfasf@hotmail.com'
// }


export const UserProvider = ({children}) => {

  const [user, setUser] = useState();


  return (
    // Este es el value que cualquier hijo (children) del userProvider va a obtener del contexto
    // <UserContext.Provider value={{hola:'Mundo', user}}>
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
