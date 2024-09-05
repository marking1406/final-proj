import React from 'react'
import Login from '../components/Profile/Login';
import { Link, NavLink } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='container'>
      <div className="head">
        <h1 className="tital">Hello nice to meet you!</h1>
      </div>
      <div className="signUpPlace">
        <h2>Sign up</h2>
        <form>
          <div className="inputs">
            <div className='input'>
              <input type="email" name='email' placeholder='Email'/>
            </div>
            <div className='input'>
              <input type="text" name='name' placeholder='Name'/>
            </div>  
            <div className='input'>
              <input type="text" name='phoneNumber' placeholder='Phone number'/>
            </div> 
            <div className='input'>
              <input type="password" name='password' placeholder='Password'/>
            </div> 
          </div>
          <button>Submit!</button>
          <p className='loginPass'>You how acount? <button style={{color:'rgb(176, 52, 41)'}}>
            <NavLink to='/Login'> Press here!</NavLink>
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
