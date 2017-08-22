import * as React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddTodo from '../official-demo/containers/AddTodo';
import FilterLink from '../official-demo/containers/FilterLink';
import VisibleTodoList from '../official-demo/containers/VisibleTodoList';

import App from '../colastyle-demo/components/App';
import todos from '../colastyle-demo/reducers/todos';
import visibilityFilter from '../colastyle-demo/reducers/visibilityFilter';
import { GetTodoList, CreateTodo, SetCompleted } from '../../api';
const {
  //ReduxAsyncConnect,
  //reducer,
  //store,
  asyncConnect,
  colaReducer,
  include
} = require('koa-cola/dist/client').Decorators.view;

export interface Props {
  dispatch?: any;
  todosData?: any;
}
export interface States {}

@asyncConnect([
  {
    key: 'todosData',
    promise: async ({ params, helpers, store: { dispatch } }) => {
      const api = new GetTodoList({});
      const data = await api.fetch(helpers.ctx);
      dispatch({
        type: 'INIT_TODO',
        data: data.result.result
      });
      return data.result.result;
    }
  }
])
@colaReducer({
  todos,
  visibilityFilter
})
@include({ AddTodo, FilterLink, VisibleTodoList })
class ColastyleDemo extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <App />;
  }
}
export default ColastyleDemo;
