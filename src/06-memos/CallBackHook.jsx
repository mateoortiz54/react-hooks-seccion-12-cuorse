import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBackHook = () => {
  const [counter, setCounter] = useState(10)

  // const incrementFather = ()=>{
  //   setCounter(counter+1)
  // }

  
  const incrementFather = useCallback(
    //value = es el que llega por argumentos
    (value) => {
      console.log('Se vuelve a ejecutar', counter)
      setCounter((valueOfCounter) => valueOfCounter+value)
      // No podemos asignarle el nuevo valor directamente ya que la variable
      //counter se guarda en memoria y se restablece
      // setCounter(counter+1)

    },
    [],
  )
  



  return (
    <>
        <h1>useCallBack hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
