<img src="https://user-images.githubusercontent.com/11332183/34832175-6d36976e-f6e9-11e7-9994-0b56aa9b13cd.png" height="60px" style="margin-bottom: 40px;" />

# Express Router Methods

List of methods that are being used for express router api handling (from express.Router()):

* acl
* all
* bind
* checkout
* connect
* copy
* delete
* get
* head
* link
* lock
* m-search
* merge
* mkactivity
* mkcalendar
* mkcol
* move
* notify
* options
* param
* patch
* post
* propfind
* proppatch
* purge
* put
* rebind
* report
* search
* subscribe
* trace
* unbind
* unlink
* unlock
* unsubscribe
* use

## Install

`npm install --save express-router-methods`

or with yarn:

`yarn add express-router-methods`

## Usage

```
import methods from 'express-router-methods'

console.log(methods)
/*
[
  'acl',
  'all',
  'bind',
  'checkout',
  'connect',
  'copy',
  'delete',
  'get',
  'head',
  'link',
  'lock',
  'm-search',
  'merge',
  'mkactivity',
  'mkcalendar',
  'mkcol',
  'move',
  'notify',
  'options',
  'param',
  'patch',
  'post',
  'propfind',
  'proppatch',
  'purge',
  'put',
  'rebind',
  'report',
  'search',
  'subscribe',
  'trace',
  'unbind',
  'unlink',
  'unlock',
  'unsubscribe',
  'use',
]
*/
```
