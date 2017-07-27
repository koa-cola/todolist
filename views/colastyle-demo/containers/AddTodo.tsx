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
  null,
  // mapDispatchToProps
  (dispatch) => {
    return {
      addTodo: async (text) => {
        var api = new CreateTodo({ text });
        var data = await api.fetch();
        var result = data.result.result;
        dispatch(Object.assign(addTodo(text), result))
      }
    }
  })
class AddTodo extends React.Component<Props, States>   {
  constructor(props: Props) {
    super(props);
  }
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