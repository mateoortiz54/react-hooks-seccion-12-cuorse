import { useFetch, useCounter } from "../hooks/index"
import { LoadingQuote, Quote } from "./index";

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)

    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const {name, status} = !!data && data;


    // if (isLoading) {
    //     return <h1>Está cargando</h1>
    // }

    return (
        <>
            <h1>
                Rick and Morty character 
            </h1> 

            {
                isLoading ?
                    <LoadingQuote />
                :(
                   <Quote name={name} status={status}/>
                )
            }
            

            <button
                className="btn btn-primary"
                disabled={isLoading}  
                onClick={()=>increment()}>
                    Next character
            </button>
            

        </>
    )
}

