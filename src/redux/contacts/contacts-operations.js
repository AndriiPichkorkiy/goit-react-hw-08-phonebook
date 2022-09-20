import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch (error) {
      //   console.log('error', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

function isDublicate(newContact, contacts) {
  return Object.keys(newContact).find(key => {
    const subString = newContact[key].toLocaleUpperCase();
    const contact = contacts.find(el =>
      el[key].toLocaleUpperCase().includes(subString)
    );
    if (contact) return !alert(`${contact[key]} is already in contacts`);
    else return false;
  });
}

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContact(data);
      //   console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (newContact, { getState }) => {
      const { contacts } = getState();

      if (isDublicate(newContact, contacts.items)) {
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, thunkAPI) => {
    try {
      // const result = api.removeContact(id);
      //   console.log(result);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
