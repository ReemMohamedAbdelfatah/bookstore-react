import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const data = useSelector((state) => state.books);
  return (
    <>
      <div className="books">
        <div className="books-list">
          {data.map(({ id, title, author }) => (
            <Book key={id} title={title} author={author} id={id} />
          ))}
        </div>
        <div className="books-form">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Books;
