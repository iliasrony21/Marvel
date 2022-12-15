import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Home/Footer'
import Header from './Components/Home/Header'
import Home from './Components/Home/Home'
import Login from './Components/Home/Login'
import SIgnUp from './Components/Home/SIgnUp'
import RequireAuth from './RequireAuth'

function App () {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SIgnUp></SIgnUp>}></Route>
        <Route
          path='/banner'
          element={
            <RequireAuth>
              <Banner></Banner>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
