import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemoved } from '../Redux/books/bookSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(bookRemoved(id));
  };

  return (
    <div className="book">
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={() => handleRemoveBook(id)}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
