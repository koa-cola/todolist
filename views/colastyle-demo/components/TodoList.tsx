import * as React from 'react';
import * as PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList: any = ({ todos = [], onTodoClick, onTodoDel }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo =>
        <Todo
          key={todo._id}
          {...todo}
          onClickHandler={() => onTodoClick(todo._id, todos)}
          onDelHandler={() => onTodoDel(todo._id)}
        />
      )}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
