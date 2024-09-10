import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

export default function Profile() {

  const [email, setEmail] = useState('yakov@gmail.com');
  const [name, setName] = useState('yakov');
  const [phone_number, setPhoneNumber] = useState('0546080824');

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/edit/${id}`) 
      .then(res => {
        const user = res.data[0];
        setName(user.name);
        setEmail(user.email);
        setPhoneNumber(user.phone_number);
      })
      .catch(err => console.log(err));
    }, [id]); 

     const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };  

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/updated/${id}`, { email, name, phone_number }) // Corrected URL
      .then(res => {
        if (res.data.updated) {
          navigate('/Profile'); // Redirect to the homepage after successful update
        } else {
          alert('Not updated');
        }
        })
       .catch(err => console.log(err)); // Added catch to handle errors
       setIsEditing(false);
    };

  return (
    <form onSubmit={handleSubmit}>  
     <div className='max-h-full max-w-full'>
      <div className='max-h-full max-w-full flex flex-col items-center justify-center'>
        <h1 className='mt-32 mb-20 text-5xl font-extrabold text-red-800'>My Profile:</h1>
        <div>
          <button className='block absolute mt-2 ml-28' type="button" 
            onClick={handleEditClick}>
            <EditIcon className='text-gray-800'/>
          </button>
        </div>
        <div className=' border-4 py-16 px-16 rounded-xl shadow-xl bg-gray-200'>
          <div className='mb-4'>
            <h2 className='text-2xl text-red-800 font-bold'>Email:</h2>{isEditing ? (<input type="email"value={email}
                onChange={e => setEmail(e.target.value)}/>) : (<p>{email}</p>)}
          </div>
          <div className='mb-4'>
            <h2 className='text-lg text-red-800 font-bold'>Name:</h2>{isEditing ? (<input type="text" value={name}
                onChange={e => setName(e.target.value)}/>) : (<p>{name}</p>)}
          </div>
          <div className='mb-4'>
            <h2 className='text-lg text-red-800 font-bold'>Phone Number:</h2>{isEditing ? (<input type="text"value={phone_number}
            onChange={e => setPhoneNumber(e.target.value)}/> ) : (<p>{phone_number}</p>)}
          </div>
        </div>
        {isEditing && <button type="submit">Update</button>} {/* Submit button for updating */}
      </div>

     </div>
    </form>
  );
}
