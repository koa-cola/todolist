import * as React from 'react'
var { ReduxAsyncConnect, asyncConnect, reducer, store } = require('koa-cola').Decorators.view;
import { addTodo } from '../actions'
import { GetTodoList, CreateTodo, SetCompleted } from '../../../api'
export interface Props {
  addTodo?: any
}
export interface States { }
@asyncConnect([],
  // mapStateToProps
  ({ }) => {
    return {

    }
  },
  // mapDispatchToProps
  (dispatch) => {
    return {
      addTodo: async (text) => {
        var api = new CreateTodo({ text });
        await api.fetch();
        dispatch(Object.assign(addTodo(text), api.result))
      }
    }
  })
class AddTodo extends React.Component<Props, States>   {
  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {

  };
  render() {
    let input
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.addTodo(input.value);
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Add Todo
        </button>
        </form>
      </div>
    )
  }
};

export default AddTodo