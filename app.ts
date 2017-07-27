// var { RunApp } = require('../dist')

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', require('util').inspect(error));
});
var { RunApp } = require('koa-cola');
RunApp();
