import * as React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
const {
  ReduxAsyncConnect,
  asyncConnect,
  reducer,
  store
} = require('koa-cola/dist/client').Decorators.view;

export interface Props {
  filter?: any;
  onClick?: any;
}
export interface States {}
@asyncConnect(
  [],
  // mapStateToProps
  (state, ownProps) => {
    return {
      active: ownProps.filter === state.visibilityFilter
    };
  },
  // mapDispatchToProps
  (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
      }
    };
  }
)
class FilterLink extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }
  static defaultProps = {};
  render() {
    return <Link {...this.props} />;
  }
}

export default FilterLink;
