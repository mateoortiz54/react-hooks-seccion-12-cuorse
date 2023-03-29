import React, { useState } from 'react'


export const TodoAdd =({onNewTodo})=> {

  const [inputValue, setInputValue] = useState('');

  const submit = (e)=>{
    e.preventDefault();
    
    if (inputValue.length <=1) {return}

    onNewTodo({
      id: new Date().getTime(),
      description: inputValue,
      done: false
    })
    setInputValue('')
  }

  const onInput =(e)=>{
    setInputValue(e.target.value)
  }


  return (
    <>
      
        {/* onSubmit={submit} */}
        <form onSubmit={submit} >
            <input type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            onChange={(e)=>onInput(e)} 
            value={inputValue}/>
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
                >
              Guardar
            </button>
        </form>
    </>
  )
}
