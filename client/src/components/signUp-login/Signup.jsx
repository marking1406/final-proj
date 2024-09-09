import React, { useState } from 'react'
import axios from 'axios';
import Login from './Login';
import Validation from './SignUpValidation';
import imgStyleSignUp from '../../assets/img/signpage_style_transparent.png'
import { NavLink, useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [ values, setValues ] = useState({
    email:'',
    name:'',
    phone_number:'',
    password:''
  })

  const [ errors, setErrors ] = useState({})
  const navigate = useNavigate()

  const handleInput = (e) => {
    setValues(prev => ({...prev,[e.target.name]:e.target.value}))
  } 

  const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(Validation(values))
    if(errors.name === '' && errors.email === '' && errors.phone_number === '' && errors.password === '' ){
      axios.post('http://localhost:3000/signup', values)
      .then(res =>{
        navigate('/Login')
      })
      .catch(err => console.log(err));
    }
  }

  
  return (
    <div className='signUpContainer size-full flex-col flex justify-center items-center bg-gray-200'>
      <div className="head mt-20 mx-10">
        <h1 className="tital text-5xl text-slate-800 text-left">Hello,<br/> nice to meet you!</h1>
      </div>
      <div className="signUpPlace border-4 shadow-xl max-w-md rounded-2xl mx-20 mt-16 mb-16 px-20 py-12
        justify-center flex-col items-center bg-slate-50">
        <h2 className='text-red-800 text-3xl mb-4'>Sign up</h2>
        <form action=''onSubmit={handleSubmit} >
          <div className="inputs ">
            <div className='input border-4 rounded-xl mb-3 px-2 py-2 bg-white'>
              <input type="email" name='email' placeholder='Email' 
              onChange={handleInput}/>
            </div>
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
            <div className='input rounded-xl border-4 mb-3 px-2 py-2 bg-white'>
              <input type="text" name='name' placeholder='Name' 
              onChange={handleInput}/>
            </div> 
            {errors.name && <span className='text-red-500'>{errors.name}</span>}
            <div className='input border-4 rounded-xl mb-3 px-2 py-2 bg-white'>
              <input type="text" name='phone_number' placeholder='Phone number' 
              onChange={handleInput}/>
            </div>
            {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber}</span>}
            <div className='input border-4 rounded-xl mb-3 px-2 py-2 bg-white'>
              <input type="password" name='password' placeholder='Password'
               onChange={handleInput}/>
            </div> 
            {errors.password && <span className='text-red-500'>{errors.password}</span>}
          </div>
          <button type="submit" onClick={handleSubmit} className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md 
            hover:bg-red-900 transition duration-300">
            Submit!
          </button>
          <p className='loginPass mt-4 text-center'>
            Already have an account?{' '}
            <NavLink to='/Login' className="text-orange-500 hover:underline">
              Press here!
            </NavLink>
          </p>
        </form>
        <div className='flex-row'><img className='' src={imgStyleSignUp} alt="style" /></div>
      </div>
    </div>
  )
}
