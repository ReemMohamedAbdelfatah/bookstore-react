import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategory } from '../Redux/categories/categorySlice';

const Categories = () => (
  <>
    <div className="categories">
      <button type="button">Check Status</button>
    </div>
  </>
);

export default Categories;
