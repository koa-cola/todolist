import * as React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () =>
  <div>
    <span className="todo-count">
      Show: 
    </span>
    <ul className="filters">
        <li><FilterLink filter="SHOW_ALL">All</FilterLink></li>
        <li><FilterLink filter="SHOW_ACTIVE">Active</FilterLink></li>
        <li><FilterLink filter="SHOW_COMPLETED">Completed</FilterLink></li>
    </ul>
  </div>;

export default Footer;
