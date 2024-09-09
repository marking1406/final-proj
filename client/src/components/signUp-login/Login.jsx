import React from 'react'
import SignUp from './Signup';
import Validation from './LoginValidation';
import imgStyleSignUp from '../../assets/img/signpage_style_transparent.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

  const [ values, setValues ] = useState({
    email:'',
    password:''
  })

  const [ errors, setErrors ] = useState({})
  
  const handleInput = (e) => {
    setValues(prev => ({...prev,[e.target.name]:e.target.value}))
  } 

  const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(Validation(values))
  }


  return (
    <div className='loginContainer size-full flex-col flex justify-center items-center bg-gray-200'>
      <div className="head mt-20 mx-10">
        <h1 className='text-5xl text-slate-800 text-left'>Welcome back!</h1>
      </div>
      <div className="loginPlace border-4 shadow-xl max-w-md rounded-2xl mx-20 mt-16 mb-16 px-20 py-12
       justify-center flex-col items-center bg-slate-50">
        <h2 className='text-red-800 text-3xl mb-4'>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="inputs">
            <div className='input border-4 rounded-xl mb-3 px-2 py-2 bg-white'>
              <input type="email" name='email' placeholder='Email'
              onChange={handleInput}/>
            </div>
              {errors.email && <span className='text-red-500'>{errors.email}</span>}
            <div className='input rounded-xl border-4 mb-3 px-2 py-2 bg-white'>
              <input type="password" name='password' placeholder='Password'
              onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
          </div>  
          <button type="submit" onClick={handleSubmit} className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md 
            hover:bg-red-900 transition duration-300">Submit!
          </button>
          <p className='text-center mt-4'>
            Don't have an account?{' '}
            <NavLink to='/SignUp' className="text-orange-500 hover:underline">
              Sign up here!
            </NavLink>
          </p>
        </form>
        <div><img className='' src={imgStyleSignUp} alt="style" /></div>
      </div>
    </div>
  )
}
