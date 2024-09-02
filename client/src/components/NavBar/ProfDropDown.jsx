import './ProfDropDown.css';
import { ProfMenuItem } from './ProfMenuItem';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function ProfDropDown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='profDropDown'>
      <ul onClick={handleClick} className={click ? 'dropDown-menu clicked' : 'dropDown-menu'}>
        {ProfMenuItem.map((item, index) => {
          return (
            <li key={index}>
              <NavLink 
                to={item.path} 
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}