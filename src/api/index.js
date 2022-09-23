import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set: token => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const signup = async data => {
  const result = await instance.post('users/signup', data);
  token.set(result.data.token);
  return result;
};

export const signin = async data => {
  const result = await instance.post('users/login', data);
  token.set(result.data.token);
  return result;
};

export const logout = async () => {
  const result = instance.post('users/logout');
  token.unset();
  return result;
};

export const getCurrent = async authToken => {
  try {
    token.set(authToken);
    const result = await instance.get('users/current');
    return result.data;
  } catch (error) {
    token.unset();
    throw error;
  }
};

//
//
//

export const getContacts = async () => {
  const result = await instance.get('contacts');
  return result;
};

//
//
//

// export const fetchContacts = async () => {
//   const { data } = await instance.get('/');
//   // console.log('data', data);
//   return data;
// };

export const addContact = async data => {
  const { data: result } = await instance.post('contacts', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`contacts/${id}`);
  return data;
};

export const changeContact = async ({ id, name, number }) => {
  const dataToSend = { name, number };
  const { data } = await instance.patch(`contacts/${id}`, dataToSend);
  return data;
};
