import * as React from 'react';
import { render } from 'react-dom';
import IndexController from '../api/controllers/IndexController';
import index from './pages/index';
import officialDemo from './pages/officialDemo';
import colastyleDemo from './pages/colastyleDemo';

var { createProvider } = require('koa-cola');

var Provider = createProvider([IndexController], {
  index,
  officialDemo,
  colastyleDemo
});

render(<Provider />, document.getElementById('app'));
