import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Roshan', 
    age: 21,
    address: {
      city: 'Ranchi',
      state: 'Jharkhand',
      country: 'India'
    }
  }

  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
     <Card username="roshan" myArr={newArr}/>
     <Card username="aceCoder" post="vibe coder" image='https://images.pexels.com/photos/4709292/pexels-photo-4709292.jpeg'/>
     <Card />
    </>
  )
}

export default App
