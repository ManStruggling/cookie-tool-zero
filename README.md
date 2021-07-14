# cookie-tool-zero
![npm version]
(https://img.shields.io/badge/npm-6.14.11-brightgreen)

cookie操作类

## Install
```
npm install --save cookie-tool-zero
```

## Usage
```javascript

const cookieTool = require('cookie-tool-zero')

cookieTool.setCookie({
    key: 'tooken',
    value: '2sdf2sf43gsd3osdxcni',
    days: 7,
    path: '/',
    domain: ''
})

cookieTool.getCookie('token')

cookieTool.delCookie('token')

```