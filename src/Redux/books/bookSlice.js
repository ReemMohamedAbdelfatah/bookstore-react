import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
    bookRemoved(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { bookAdded, bookRemoved } = bookSlice.actions;

export default bookSlice.reducer;
