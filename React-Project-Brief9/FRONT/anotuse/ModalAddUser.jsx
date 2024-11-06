/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const AddUserModal = ({ onAddUser, onClose }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [haveAccess, setHaveAccess] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name,
      age: Number(age),
      haveAccess,
    };
    onAddUser(newUser);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold">Ajouter un utilisateur</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Nom:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="border p-2 w-full" 
              required 
            />
          </div>
          <div>
            <label className="block">Âge:</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              className="border p-2 w-full" 
              required 
            />
          </div>
          <div>
            <label className="block">
              <input 
                type="checkbox" 
                checked={haveAccess} 
                onChange={() => setHaveAccess(!haveAccess)} 
              />
              Avoir accès
            </label>
          </div>
          <button 
            type="submit" 
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Ajouter
          </button>
        </form>
        <button 
          className="mt-2 p-2 bg-red-500 text-white rounded" 
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default AddUserModal;
