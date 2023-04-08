import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://643125c3d4518cfb0e5b6193.mockapi.io/contacts',
  });
  
  export const selectContacts = async () => {
    const data = await instance.get('/');
    return data;
  };