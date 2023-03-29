import { useState } from "react"

export const useForm = (initialForm = {}) => {


    // {
    //     username: '',
    //     email: '',
    //     password:'',
    
    // }

    const [formState, setFormState] = useState(initialForm)

    // const {username, email, password} = formState

    const onInputChange = ({target}) =>{
        const {value, name} = target
        // console.log({name, value})

        setFormState({
            ...formState,
            [name] : value 
        });

    }

    const onResetForm = ()=> {
        setFormState(initialForm)
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
