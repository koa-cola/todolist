import * as React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AddTodo from '../official-demo/containers/AddTodo';
import FilterLink from '../official-demo/containers/FilterLink';
import VisibleTodoList from '../official-demo/containers/VisibleTodoList';
var { ReduxAsyncConnect, asyncConnect, reducer, store  } = require('koa-cola').Decorators.view;
var todoApp = require('../colastyle-demo/reducers').default
var App = require('../colastyle-demo/components/App').default;
var todos = require('../colastyle-demo/reducers/todos').default;
var visibilityFilter = require('../colastyle-demo/reducers/visibilityFilter').default;
import { GetTodoList, CreateTodo, SetCompleted } from '../../api'

// let store = createStore(todoApp)

export interface Props { 
}
export interface States { }

@asyncConnect([{
  key: 'todos',
  promise: async ({ params, helpers }) => {
    var api = new GetTodoList({});
    var data = await api.fetch(helpers.ctx);
    return data.result.result;
  }
}])
class ColastyleDemo extends React.Component<Props, States>   {
  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {

  };
  static _reducer = {
    todos, visibilityFilter
  }
  static childrenComponents = [AddTodo, FilterLink, VisibleTodoList]
  componentDidMount() {
  }
  render() {
    return <App />
  }
};
export default ColastyleDemo