// var { RunApp } = require('../dist')

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});
var { RunApp } = require('koa-cola')
RunApp();
