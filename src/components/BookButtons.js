import React from 'react';
import PropTypes from 'prop-types';
import './BookButtons.css';

export default function BookButtons(props) {
  const { handleClick } = props;
  return (
    <div className="bookButtons">
      <button type="button" className="book-comment">Comment</button>
      <span>|</span>
      <button type="button" className="book-remove" onClick={handleClick}>Remove</button>
      <span>|</span>
      <button type="button" className="book-edit">Edit</button>
    </div>
  );
}

BookButtons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
