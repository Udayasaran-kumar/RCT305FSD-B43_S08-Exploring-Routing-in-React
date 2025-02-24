import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'
import {Routes,Route} from 'react-router-dom'
import Bob from './Bob';
import Charlie from './Charlie';
import Alice from './Alice';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Users/>
      <Routes>
        <Route path='/bob' element={<Bob/>}></Route>
        <Route path='/alice' element={<Alice/>}></Route>
        <Route path='/charlie' element={<Charlie/>}></Route>
      </Routes>
    </>
  )
}

export default App
