import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({name, status}) => {
  // Nos ayuda a identificar una etiqueta del html,
  // a la cual siempre vamos a poder acceder
  const pRef = useRef()

  const [boxSize, setBoxSize] = useState({width:0, height:0})

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect()
    setBoxSize({
      width,
      height
    })
  }, [])


  return (
    <>
      <blockquote className="blockquote text-end" style={{display:'flex'}}>

        <p ref={pRef} className="mb-1">{name}</p>
        <footer className="blockquote-footer">{status}</footer>
      </blockquote>
      <code>width: {boxSize.width} height: {boxSize.height}</code>

    </>
    
  )
}
