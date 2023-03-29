import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 10) => {
  for (let i = 0; i<iterationNumber; i++){
    console.log('Ahí vamos')
  }
  return `${iterationNumber} veces iteradas`;
}



export const MemoHook = () => {

  const  {counter, increment} =useCounter(4000)
  const [show, setShow] = useState(true)


  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])


  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />  

        <h4>{memorizeValue}</h4>

        <button 
            className="btn btn-primary"
            onClick={()=> increment()}>
            +1
        </button>
        <button
            className="btn btn-outline-primary"
            onClick={()=> setShow(!show)}
            >
            {/* Los valores booleanos no se pueden mostrar a menos que los convierta a json */}
            show/hide {JSON.stringify(show)}
        </button>
    </>
  )
}
