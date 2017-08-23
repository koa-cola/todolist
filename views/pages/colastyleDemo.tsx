import * as React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddTodo from '../colastyle-demo/containers/AddTodo';
import FilterLink from '../colastyle-demo/containers/FilterLink';
import VisibleTodoList from '../colastyle-demo/containers/VisibleTodoList';

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

@asyncConnect([])
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
