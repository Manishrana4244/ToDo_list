import React from 'react'

const ToDoLists = (props) => {
    
  return (
    <>
        <button onClick={()=>{
            props.onSelect(props.id)
        }}>* </button> <li > {props.text} </li> 
      
    </>
   
  )
}

export default ToDoLists

