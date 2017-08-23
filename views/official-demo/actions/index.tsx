let nextTodoId = 0;

import { GetTodoList, CreateTodo, SetCompleted } from '../../../api';
export const addTodo = text => async dispatch => {
  const data = await new CreateTodo({ text }).fetch();
  dispatch({
    type: 'ADD_TODO',
    text,
    ...data.result.result
  });
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

export const toggleTodo = (_id, todos) => async dispatch => {
  await new SetCompleted({
        _id,
        completed: !todos.find(todo => todo._id == _id).completed
      }).fetch();
  dispatch( {
    type: 'TOGGLE_TODO',
    _id
  });
};

export const getAllTodo = () => async dispatch => {
  const data = await new GetTodoList({}).fetch();
  dispatch({
    type: 'INIT_TODO',
    data: data.result.result
  });
};
