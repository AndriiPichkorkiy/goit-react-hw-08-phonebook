import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'items',
    initialState : [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => [...store, payload],
      prepare: contact => ({ payload: { ...contact, id: nanoid(10) } }),
    },

    removeContact: (store, { payload }) =>
      store.filter(phoneNumber => phoneNumber.id !== payload),
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
