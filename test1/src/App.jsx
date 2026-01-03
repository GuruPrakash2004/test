import { useState } from 'react'
import './App.css'
import ContainerList from './components/ContainerList'
import CounterAll from './components/CounterAll'

function App() {

  const [value,setValue] = useState(0);
  

  return (
    <>
      <div>
          <h3 className='text-center'>count:{value}</h3>
          <div className='d-flex p-4'>
          <ContainerList setValue={setValue}/>
      </div>
      </div>

      
    </>
  )
}

export default App
