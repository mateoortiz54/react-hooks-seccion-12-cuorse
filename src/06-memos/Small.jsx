import {memo} from 'react'

// El hook memo sirve para hacer que un componente (se recomienda que sean grandes o con funciones pesadas como lo son una api)
// no se vuelvan a renderizar de no ser por que su estado se modificó

export const Small = memo(({counter}) => {

    console.log('Me volví a dibujar :(')

  return (
    <>
        <small>{counter}</small>
    </>
  )
})
