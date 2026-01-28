
import './App.css'
import React , {useState} from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Protect from './Components/Protect'
import Dashboard from './Components/Dashboard'
import Child from './Components/Child'
import Parent from './Components/Parent'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [name, setName] = useState("Grishma");
  const [age, setAge] = useState(19);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Dashboard' element={<Dashboard />} >
          <Route index element={<Dashboard />} />
        <Route path='protect' element={<Protect />} />
       </Route>

        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/parent' element={<Parent />} />
        <Route path='/child' element={<Child name={name} age={age} setName={setName} setAge={setAge} />} />
      </Routes>
     
    </>
  )
}

export default App
