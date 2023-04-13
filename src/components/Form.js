import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../Redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ id: '', title: '', author: '' });

  const addBookToStore = (e) => {
    e.preventDefault();
    if (state.title === '') {
      return;
    }
    dispatch(bookAdded(state));
    setState({ id: '', title: '', author: '' });
  };

  const handleTitleChange = (e) => {
    setState({
      ...state,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="form" onSubmit={addBookToStore}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={state.title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Book author"
          className="form-select"
          value={state.author}
          onChange={handleTitleChange}
        />
        <button className="form-btn" type="submit">
          Add Book
        </button>
      </form>
    </>
  );
};

export default Form;
