import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import './Book.css';
import BookButtons from './BookButtons';

export default function Book(props) {
  const {
    title, author, category, id,
  } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book" data-id={id}>
      <div className="book-wrapper">
        <div className="book-category">
          {category}
        </div>
        <div className="book-title">
          <span className="title-space">{title}</span>
        </div>
        <div className="book-author">
          {author}
        </div>
        <BookButtons handleClick={handleClick} />
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
