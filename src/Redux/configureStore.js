import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categorySlice from './categories/categorySlice';


export default configureStore({
  reducer: {
    books: bookSlice,
    categories: categorySlice,
  },
});
