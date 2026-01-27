
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Protect from './Components/Protect'
import Dashboard from './Components/Dashboard'
import {Routes, Route} from 'react-router-dom'
function App() {
  
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
      </Routes>
     
    </>
  )
}

export default App
