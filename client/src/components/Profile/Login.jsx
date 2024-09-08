import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="inputs space-y-4">
            <div className='input'>
              <input
                type="email"
                name='email'
                placeholder='Email'
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className='input'>
              <input
                type="password"
                name='password'
                placeholder='Password'
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit!
          </button>
          <p className='text-center mt-4'>
            Don't have an account?{' '}
            <NavLink to='/SignUp' className="text-red-600 hover:underline">
              Sign up here!
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
