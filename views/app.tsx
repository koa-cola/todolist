import * as React from 'react';
import { render } from 'react-dom';
import IndexController from '../api/controllers/IndexController';
import index from './pages/index';
import officialDemo from './pages/officialDemo';
import colastyleDemo from './pages/colastyleDemo';

var { createProvider } = require('koa-cola/dist/client');
// 使用koa-cola提供的createProvider会自动建立路由，如果手动使用官方的Provider，则需要开发者手动写router
var Provider = createProvider([IndexController], {
  index,
  officialDemo,
  colastyleDemo
});

render(<Provider />, document.getElementById('app'));
