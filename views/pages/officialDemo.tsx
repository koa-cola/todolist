import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from '../official-demo/reducers';
import App from '../official-demo/components/App';

let store = createStore(todoApp);

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
