import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) =>
{
  const id = props.id;
  const title = props.title;
  const isComplete = props.isComplete;
  const updateComplete = props.updateComplete; // from App.js
  const deleteTask = props.deleteTask;

  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
    
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => updateComplete(props.id, !isComplete)}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button"
        onClick={() => deleteTask(props.id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
