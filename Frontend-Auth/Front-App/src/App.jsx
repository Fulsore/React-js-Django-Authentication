import './App.css'
import Home from './Component/Home'
import Login from './Component/Login'
import Register from './Component/Register'
import NavBar from './Component/NavBar'
import About from './Component/About'
import ProtectedRoute from './Component/ProtectedRoute'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const noNavbar = location.pathname === "/register" || location.pathname === "/" || location.pathname.includes("password")
  return (
    <>
      {
        noNavbar ?
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          :
          <NavBar
            content={
              <Routes>
                <Route element={<ProtectedRoute/>}>
                <Route path='/' element={<Login />}  ></Route>
                <Route path='/register' element={<Register />}  ></Route>
                <Route path='/home' element={<Home />}  ></Route>
                <Route path='/about' element={<About />}  ></Route>
                </Route>
              </Routes>
            }
          />
      }
    </>
  )
}

export default App
