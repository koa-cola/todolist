import * as React from 'react';
import { Link } from 'react-router';
export interface Props {}
export interface States {}

class Index extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {};
  render() {
    return (
      <div>
        <h1>Wow koa-cola!</h1>
        <Link to="/official-demo">官方例子</Link>
        <br />
        <Link to="/colastyle-demo">koa-cola风格例子</Link>
        <br />
      </div>
    );
  }
}
export default Index;
