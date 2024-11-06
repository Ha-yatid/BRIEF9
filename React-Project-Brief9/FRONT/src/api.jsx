import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

export const loginUser = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const fetchUsers = async () => {
  return axios.get(`${API_URL}`);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateUser = async (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};
