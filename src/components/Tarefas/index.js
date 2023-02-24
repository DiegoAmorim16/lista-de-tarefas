import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './tarefas.css';
export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}{' '}
          <span>
            <FaEdit
              // eslint-disable-next-line no-undef
              onClick={(e) => handleEdit(e, index)}
              className="Edit"
            />
            <FaWindowClose
              // eslint-disable-next-line no-undef
              onClick={(e) => handleDelete(e, index)}
              className="Close"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
