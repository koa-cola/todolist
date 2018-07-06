import * as React from 'react';
import { render } from 'react-dom'
import {createProvider} from 'koa-cola/client'

var Provider = createProvider(
    [
	{
		"component": "index",
		"path": "/"
	},
	{
		"component": "officialDemo",
		"path": "/official-demo"
	},
	{
		"component": "colastyleDemo",
		"path": "/colastyle-demo"
	}
]
,{
    'index' : require('./pages/index').default,
'officialDemo' : require('./pages/officialDemo').default,
'colastyleDemo' : require('./pages/colastyleDemo').default,
} 
    
);

render(<Provider />, document.getElementById('app'))