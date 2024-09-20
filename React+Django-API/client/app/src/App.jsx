import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Simple Book Store</h1>
        <div>
            <input type={'text'} placeholder={'Book Title....'}/>
            <input type={'date'} placeholder={'Release Date....'}/>
            <button type='submit' className="btn btn-primary">Submit</button>
        </div>
    </>
  )
}

export default App
