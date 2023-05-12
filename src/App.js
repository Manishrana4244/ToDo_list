import React, { useState } from 'react'
import ToDoLists from './ToDoLists';
import './App.css'


const App = () => {
  const [change,setChange] = useState("");
  const [items , setitems] = useState([]);
  const inputData = (event) => {
    setChange(event.target.value)
  };
  const itemsOfList=()=>{
    setitems((oldItems)=>{
      return [...oldItems,change]
    })
    setChange('')
  }
  const DeleteItems=(id)=>{
    setitems((oldItems)=>{
      return oldItems.filter((arrEle , idx) => {
        return (idx !== id);
      })
    })
  }
    return ( 
   <>
   <div className='bo'>
    <div >
      <br/>
      <br/>
      <div className='todo'>
      <h1>ToDo list</h1>
      </div>
      <div className='one'>
      <div className='two'>
      <input type="text" onChange={inputData} placeholder='Add a Items' value={change}/>
      <button onClick={itemsOfList}>+</button>
      </div>
      
      <ul>
       {items.map((i , idx ) => {
        return <ToDoLists 
            key={idx}
            id={idx}
          text={i}
          onSelect={DeleteItems}
         />
         
        }) 
       }
      </ul>
      </div>
     

    </div>
   </div>
   </>
  )
}

export default App
