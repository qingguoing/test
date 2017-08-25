require('babel-register')({
    plugins: [
        'transform-object-rest-spread'
    ],
    only: /demo/,
    retainLines: true,
    sourceMaps: 'inline',
    babelrc: false,
});

require('../demo/register.js');
// require('../exclude/index.js');
