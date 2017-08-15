/**
 * created by qingguoing on 15/08/2017
 */

const a = require('./a');
const b = require('./b');
const c = require('./c');
const d = require('./d');
const tmp = require('./b');
tmp.obj.name = 'tmp';
console.log(tmp === b);
console.log(a.name, b.obj.name, c().name, d().name);
