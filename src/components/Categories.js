import React, { useState } from 'react';
import './Categories.css';

export default function Categories() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  return (
    <div className="categories">
      <div className="status">
        <p
          className={visible && 'visible'}
        >
          Loading ...
        </p>
      </div>
      <button type="button" onClick={handleClick}>Check status</button>
    </div>
  );
}
