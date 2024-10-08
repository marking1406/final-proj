import './ProfDropDown.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { ProfMenuItem } from './ProfMenuItem';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function ProfDropDown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const Logout = () => {
    window.localStorage.removeItem('isLogedIn')
  }

  return (
    <div className='profDropDown'>
      <ul onClick={handleClick} className={click ? 'dropDown-menu clicked' : 'dropDown-menu'}>
        {ProfMenuItem.map((item, index) => {
          return (
            <li key={index}>
             {!item.isButton ? (
              <NavLink 
                to={item.path} 
                className={item.cName}
                onClick={() => setClick(false)}>
                {item.title}
              </NavLink>
            ) : (
              <button 
                className={item.cName} onClick={() => Logout()}>{item.title} <LogoutIcon/>
              </button>
            )}
          </li>
          );
        })}
      </ul>
    </div>
  );
}