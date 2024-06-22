import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5
  
  const addValue = () =>{
    if(counter<=19){
      setCounter(counter+1)
    }
    console.log("Count", counter);
  }

  const subValue = () =>{
    if(counter>=1){
    setCounter(counter-1)
    }
    console.log("Count", counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={subValue}>Remove Value{counter}</button>
      <p>Counter is {counter}</p>
    </>
  )
}

export default App
