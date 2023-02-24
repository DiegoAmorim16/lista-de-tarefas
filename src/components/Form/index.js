import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import './form.css';
import PropType from 'prop-types';
export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form action="#" className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Insira a tarefa"
        value={novaTarefa}
      ></input>
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
}
/*
Form.defaultProps = {
  novaTarefa: '',
}
*/

Form.propTypes = {
  handleChange: PropType.func.isRequired,
  handleSubmit: PropType.func.isRequired,
  novaTarefa: PropType.string.isRequired,
};
