import { nanoid } from 'nanoid';
import { combineReducers, createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, removeContact } from './contacts-operations';

const contactSlice = createSlice({
  name: 'items',
  initialState: [],
    
  extraReducers: {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,

    [addContact.fulfilled]: (store, { payload }) => [...store, payload],
    
    [removeContact.fulfilled]: (store, { payload }) => store.filter(item => item.id !== payload),
  }
});

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  extraReducers: {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [removeContact.pending]: () => true,
    [removeContact.fulfilled]: () => false,
    [removeContact.rejected]: () => false,
  }
});

const errorSlice = createSlice({
  name: "error",
  initialState: null,
  extraReducers: {
    [fetchContacts.pending]: () => null,
    [fetchContacts.rejected]: (_, { payload }) => payload,
    
    [addContact.pending]: () => null,
    [addContact.rejected]: (_, { payload }) => payload,
    
    [removeContact.pending]: () => null,
    [removeContact.rejected]: (_, {payload}) => payload,
  }
});

export default combineReducers({
  items: contactSlice.reducer,
  loading: loadingSlice.reducer,
  error: errorSlice.reducer,
})


export { addContact, removeContact }