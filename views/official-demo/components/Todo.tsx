import * as React from 'react';
import * as PropTypes from 'prop-types';

const Todo: any = ({ onClickHandler, completed, text }) =>
  <li className={completed ? 'completed' : ''}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed ? true : false}
        onChange={onClickHandler}
      />
      <label onClick={onClickHandler}>{text}</label>
      <button className="destroy" />
    </div>
  </li>;

Todo.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
