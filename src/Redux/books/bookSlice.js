import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
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
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => (
      { ...state, books: [...state.books, action.payload] }
    ),
    bookRemoved: (state, action) => (
      {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }
    ),
  },
});

export const { bookAdded, bookRemoved } = bookSlice.actions;

export default bookSlice.reducer;
