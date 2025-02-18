import { useState } from 'react'

function App(){
  const [count, setcount]=useState(0);
  return(
    <>
    
    <h2>counter: {count}</h2>
    <button onClick={()=>setcount(count+5)}>Add 5</button>
    <button onClick={()=>setcount(count-5)} disabled={count===0}>remove 5</button>
    <button onClick={()=>setcount(0)}>Reset</button>
    </>
  )
}

export default App
