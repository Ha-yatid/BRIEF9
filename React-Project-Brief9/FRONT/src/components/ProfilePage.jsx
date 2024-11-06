import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProfilePage = ({ user, logout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(user);  // Store user data
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(user);  
  }, [user]);
  
  if (!user) {
    return <Navigate to="/login" />; 
  };



  const handleUpdate = () => {
    // Save the changes to the profile (You can replace this with an API call)
    console.log('Updated profile:', userData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Delete user logic (You can replace this with an API call)
    console.log('Deleted profile:', user._id);
    // Perform logout after deletion
    logout();
    navigate('/login'); // Redirect to login after delete
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
        <button 
          onClick={logout} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          {isEditing ? (
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                name="fullName" 
                value={userData.fullName} 
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          ) : (
            <div>
              <p className="text-lg font-medium text-gray-800">Full Name: {userData.fullName}</p>
            </div>
          )}
        </div>
        
        <div className="mb-4">
          {isEditing ? (
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                value={userData.email} 
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          ) : (
            <div>
              <p className="text-lg font-medium text-gray-800">Email: {userData.email}</p>
            </div>
          )}
        </div>

        {/* Profile action buttons */}
        <div className="flex justify-between">
          {isEditing ? (
            <button 
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Edit Profile
            </button>
          )}
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {

    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };
  
export default ProfilePage;
