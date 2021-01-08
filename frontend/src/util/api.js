import axios from 'axios';

const apiUrl = 'https://localhost:5001'; // TODO move to env

const getClient = () => {
  const headers = {
    Accept: 'application/json',
  };

  const client = axios.create({
    baseURL: apiUrl,
    timeout: 30000,
    headers,
  });

  return client;
};

export const getTasks = (params) => getClient().get('/tasks', params);

export const addTask = (task) => task;
