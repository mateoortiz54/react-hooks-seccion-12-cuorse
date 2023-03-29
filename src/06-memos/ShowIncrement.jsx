
export const ShowIncrement = ({increment}) => {

    console.log('Me volví a generar :(')

  return (
    <button 
        onClick={()=>{
            increment(5);
        }}
        className="btn btn-primary">
        Incrementar
    </button>
  )
}
