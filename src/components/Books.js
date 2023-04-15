import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';
import './Books.css';
import { fetchBooks } from '../redux/books/booksSlice';
import BookProgress from './BookProgress';

export default function Books() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const bookStatus = useSelector((state) => state.books.status);

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [bookStatus, dispatch]);

  return (
    <div className="books">
      <ul className="books-list">
        {bookStatus === 'succeeded'
          && Object.keys(books.books).map((key) => (
            <li key={key}>
              <Book
                title={books.books[key][0].title}
                author={books.books[key][0].author}
                category={books.books[key][0].category}
                id={key}
              />
              <BookProgress />
            </li>
          ))}
      </ul>
      <div className="horizontal-divider" />
      <BookForm />
    </div>
  );
}
