import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';
import './BookForm.css';

export default function BookForm() {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const titleVal = useRef();
  const authorVal = useRef();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      !titleVal.current.value
      || !authorVal.current.value
      || addRequestStatus !== 'idle'
    ) return;
    try {
      setAddRequestStatus('pending');
      await dispatch(
        addNewBook({
          item_id:
            Math.random().toString(36).substring(2, 15)
            + Math.random().toString(36).substring(2, 15),
          title: titleVal.current.value,
          author: authorVal.current.value,
          category: 'Fiction',
        }),
      );
      titleVal.current.value = '';
      authorVal.current.value = '';
    } catch (err) {
      throw new Error(err);
    } finally {
      setAddRequestStatus('idle');
    }
  };
  return (
    <div className="book-form-wrapper">
      <div className="book-form">
        <h2>Add New Book</h2>
        <form>
          <input placeholder="Book title" ref={titleVal} />
          <input placeholder="Book author" ref={authorVal} />
          <input type="submit" onClick={handleClick} value="Submit" />
        </form>
      </div>
    </div>
  );
}
