import axios from 'axios';

axios.defaults.baseURL = 'https://63bf3cbc0cc56e5fb0d4d4e5.mockapi.io';

export const addContactApi = contact => {
  return axios.post('/contacts/contacts', contact).then(({ data }) => {
    return data;
  });
};

export const getContactsApi = () => {
  return axios.get('/contacts/contacts').then(({ data }) => {
    return data;
  });
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/contacts/${id}`).then(({ data }) => {
    return data;
  });
};
