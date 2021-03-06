import React from "react";
import {useDispatch} from "react-redux";
import {ActionType} from "../../store/action";
import './filter.scss';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch({
      type: ActionType.FILTER_DATA,
      payload: evt.target.value
    });
  };


  return (
    <section className="filter-section">
      <label className="filter-section__label" htmlFor="filter">Filter</label>
      <input className="filter-section__input" id="filter" onChange={handleChange} />
    </section>
  );
};


export default Filter;
