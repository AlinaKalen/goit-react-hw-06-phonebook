import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../redux/FilterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={css.SrchForm}>
      Filter contacts by name:
      <input
        placeholder="Enter a name"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(addFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
