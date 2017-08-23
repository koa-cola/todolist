import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import todoApp from '../official-demo/reducers';
import App from '../official-demo/components/App';

import { getAllTodo } from '../official-demo/actions';

let store = createStore(todoApp, applyMiddleware(ReduxThunk));
store.dispatch(getAllTodo());

export interface Props {}
export interface States {}

class OfficialDemo extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {};
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
export default OfficialDemo;
