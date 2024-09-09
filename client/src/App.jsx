import './index.css';
import { Routes, Route, Router } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar.jsx';
import HomePage from './pages/Homepg.jsx';
import Vehicle from './pages/Vehicle.jsx';
import RealEstate from './pages/RealEstate.jsx'
import Furniture from './pages/Furniture.jsx'
import SignUp from './components/signUp-login/Signup.jsx';
import Login from './components/signUp-login/Login.jsx';
import Profile from './components/Profile/Profile.jsx'
import NewAd from "./components/Profile/NewAd.jsx";
import Logout from "./components/Profile/Logout.jsx";


export default function App() {

  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/Vehicle' element={<Vehicle/>}/>
        <Route path='/RealEstate' element={<RealEstate/>}/>
        <Route path='/Furniture' element={<Furniture/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/NewAd' element={<NewAd/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Logout' element={<Logout/>}/>
      </Routes>
    </div>
  )
}