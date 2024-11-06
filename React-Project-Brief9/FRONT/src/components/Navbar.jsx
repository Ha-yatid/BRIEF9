//import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Navbar = ({ user, logout }) => (
  <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
    <div className="flex space-x-6">
      <Link to="/" className="font-bold text-xl">MyApp</Link>
      <Link to="/" className="hover:underline">User List</Link>
      {user && <Link to="/dashboard" className="hover:underline">Dashboard</Link>}
    </div>
    <div>
      {user ? (
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors">Logout</button>
      ) : (
        <div className="space-x-6">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      )}
    </div>
  </nav>
);

Navbar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired
};


export default Navbar;
