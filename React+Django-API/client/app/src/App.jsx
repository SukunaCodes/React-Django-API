import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>JJK Warehouse</h1>
        <div>
            <input type={'text'} placeholder={'Character Name....'}/>
            <input type={'text'} placeholder={'JJK Apparel....'}/>
            <button type='submit' className="btn btn-primary">Search</button>
        </div>
    </>
  )
}

export default App
