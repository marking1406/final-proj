import React, { useState } from 'react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false); 
  const [profile, setProfile] = useState({
    name: 'Hembo Tingor',
    email: 'rntng@gmail.com',
    phone: '9897998989',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = () => {
    setIsEditing(false); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md flex w-2/4">
        {/* Left Section */}
        <div className="flex flex-col items-center bg-gradient-to-r from-pink-500 to-orange-500 text-white p-6 rounded-l-lg">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Profile" 
            className="rounded-full w-24 h-24 mb-4" 
          />
          <h2 className="text-xl font-semibold">{profile.name}</h2>
        </div>

        {/* Right Section */}
        <div className="p-6 flex-1">
          <h2 className="text-lg font-semibold mb-2">Information</h2>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Email</p>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="border rounded-md p-2"
                />
              ) : (
                <p className="text-gray-600">{profile.email}</p>
              )}
            </div>
            <div>
              <p className="font-medium">Phone</p>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="border rounded-md p-2"
                />
              ) : (
                <p className="text-gray-600">{profile.phone}</p>
              )}
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2 mt-8">Posts</h2>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Recent</p>
              <p className="text-gray-600">Sam Disuja</p>
            </div>
          </div>

          <div className="mt-4">
            {isEditing ? (
              <div>
                <button
                  onClick={saveProfile}
                  className="text-blue-500 mr-4"
                >
                  Save
                </button>
                <button
                  onClick={toggleEdit}
                  className="text-gray-500"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <a
                href="#"
                onClick={toggleEdit}
                className="text-blue-500"
              >
                Edit Profile
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
