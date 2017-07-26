import * as React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
var todoApp = require('../official-demo/reducers').default
var App = require('../official-demo/components/App').default;
var todos = require('../official-demo/reducers/todos').default;
var visibilityFilter = require('../official-demo/reducers/visibilityFilter').default;
let store = createStore(todoApp)

export interface Props { }
export interface States { }

class OfficialDemo extends React.Component<Props, States>   {
  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {

  };
  render() {
    return <Provider store={store}>
      <App />
    </Provider>
  }
};
export default OfficialDemo