import { createSlice, nanoid } from '@reduxjs/toolkit';

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: nanoid(),
        ...action.payload,
      };
      return [...state, newContact];
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = ContactSlice.actions;

export const selectContacts = (state) => state.contacts;
export const selectFilter = (state) => state.filter;

export default ContactSlice.reducer;
