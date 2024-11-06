import { useState } from 'react';
import { updateUser } from '../api';
import PropTypes from 'prop-types';

const Dashboard = ({ user }) => {
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async () => {
    await updateUser(user._id, { email });
    alert('Profile updated');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Email: <input value={email} onChange={(e) => setEmail(e.target.value)} /></p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};
Dashboard.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};
export default Dashboard;
