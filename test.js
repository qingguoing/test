const delegate = require('delegates');
const a ={};
a.b = {
    test: 'test',
    foo() {
        return 'foo method';
    },
};


delegate(a, 'b').method('foo');

console.log(a.foo());