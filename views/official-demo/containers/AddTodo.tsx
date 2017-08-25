import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = (args?) => {
  let input;
  const { dispatch } = args;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          className="new-todo"
          placeholder="需要做什么?"
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
