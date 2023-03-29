import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'mateoortiz202@gmail.com',
    })

    const {username, email} = formState

    const onInputChange = ({target}) =>{
        const {value, name} = target
        console.log({name, value})

        setFormState({
            ...formState,
            [name] : value 
        });

    }


    // useEffect(()=>{
    //     console.log('useEffect called!')
    // }, []);

    // useEffect(()=>{
    //     console.log('FormState changed!')
    // }, [formState]);
    
    // useEffect(()=>{
    //     console.log('email changed!')
    // }, [email]);


    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    


    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="mateoortiz202@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}

            />
            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
