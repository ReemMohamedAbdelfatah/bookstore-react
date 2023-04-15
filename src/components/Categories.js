import React, { useState } from 'react';
import './Categories.css';

export default function Categories() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  return (
    <div className="categories">
      <div className="status">
        <img
          src="https://media.giphy.com/media/gibvnAbdWQEiGtPlk3/giphy.gif"
          alt="status"
          className={visible && 'visible'}
        />
      </div>
      <button type="button" onClick={handleClick}>Check status</button>
    </div>
  );
}
