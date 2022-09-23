import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const result = await api.getContacts();
      return result.data;
    } catch (error) {
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
      api.removeContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (changedContact, thunkAPI) => {
    try {
      api.changeContact(changedContact);
      return changedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
