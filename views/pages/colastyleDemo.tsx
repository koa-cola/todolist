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
  Cola,
  include
} = require('koa-cola/client').Decorators.view;

export interface Props {
  dispatch?: any;
  todosData?: any;
}
export interface States {}

@Cola({
  initData : {
      todosData : async ({ params, helpers, store: { dispatch } }) => {
          const api = new GetTodoList({});
          const data = await api.fetch(helpers.ctx);
          dispatch({
              type: 'INIT_TODO',
              data: data.result.result
          });
          return data.result.result;
      }
  },
  reducer : {
      todos,
      visibilityFilter
  }
})
// 如果子组件要使用 @Cola 进行服务器端渲染，
// 则需要把该组件包含进装饰器 include。（以下三个实际并未使用）
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
