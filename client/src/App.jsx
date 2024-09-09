import './index.css';
import { Routes, Route, Router, NavLink } from 'react-router-dom';
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

  const login = window.localStorage.getItem('isLogedIn');

  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/Vehicle' element={<Vehicle/>}/>
        <Route path='/RealEstate' element={<RealEstate/>}/>
        <Route path='/Furniture' element={<Furniture/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Profile' element={ login ? <Profile/> : 
        <div className=' size-full flex-col flex justify-center items-center bg-gray-200 my-20 py-20 '>
          <h1 className='text-red-800 text-4xl'>You shoulde to login please</h1>
          <button>
            <NavLink to='/Login' className="text-orange-500 hover:underline ">
              Login here!
            </NavLink>
          </button>
        </div> }/>
        <Route path='/NewAd' element={<NewAd/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Logout' element={<Logout/>}/>
      </Routes>
    </div>
  )
}