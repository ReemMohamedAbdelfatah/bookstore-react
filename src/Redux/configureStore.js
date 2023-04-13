import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categorySlice from './categories/categorieSlice';

export default configureStore({
  reducer: {
    books: bookSlice,
    categories: categorySlice,
  },
});
