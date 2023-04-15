import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'; // eslint-disable-line
import './styles.css';
import './BookProgress.css';

export default function BookProgress() {
  const percentage = 66;

  return (
    <div className="bookProgress">
      <div className="bookProgress-status">
        <div className="status-circle">
          <CircularProgressbar value={percentage} />
          <span className="status-percentage">
            <span>
              {percentage}
              %
            </span>
            <span className="status-completed">Completed</span>
          </span>
          <div className="status-border" />
        </div>
        <div className="status-text">
          <h2>CURRENT CHAPTER</h2>
          <span className="status-text-chapter">Chapter 17</span>
          <button type="button" className="status-text-button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}
