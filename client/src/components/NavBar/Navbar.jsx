import './NavBar.css';
import ProfDropDown from './ProfDropDown';
import logo from '../../assets/img/2.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ dropDown, setDropDown ] = useState(false)

  const onMouseEnter = () => {
     if(window.innerWidth < 530){
      setDropDown(false)
     }else{
      setDropDown(true)
     }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 530){
     setDropDown(false)
    }else{
     setDropDown(false)
    }
 };

  return (
    <nav className='nav'>
      <Link to='/HomePage'>
        <img className='logo' src={logo} alt="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to='/Vehicle'>Vehicle</NavLink>
        </li>
        <li>
          <NavLink to='/RealEstate'>RealEstate</NavLink>
        </li>
        <li>
          <NavLink to='/Furniture'>Furniture</NavLink>
        </li>
        <li>
          <NavLink to='/SignUp'>SignUp</NavLink>
        </li>
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
          <NavLink to='/Profile'>Profile<ArrowDropDownIcon/></NavLink>
          {dropDown && <ProfDropDown/>}
        </li>
      </ul>
    </nav>
  );
}