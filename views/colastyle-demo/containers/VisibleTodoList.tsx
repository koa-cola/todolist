import * as React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { GetTodoList, CreateTodo, SetCompleted } from '../../../api';

const { asyncConnect } = require('koa-cola/dist/client').Decorators.view;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: async (_id, todos) => {
      var toggle = toggleTodo(_id);
      var api = new SetCompleted({
        _id,
        completed: !todos.find(todo => todo._id == _id).completed
      });
      await api.fetch();
      dispatch(toggle);
    }
  };
};

export interface Props {
  onTodoClick?: any;
  todos?: any;
}
export interface States {}

// 获取所有todo
@asyncConnect(
  [
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
  ],
  mapStateToProps,
  mapDispatchToProps
)
class VisibleTodoList extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {};
  render() {
    return <TodoList {...this.props} />;
  }
}
export default VisibleTodoList;
