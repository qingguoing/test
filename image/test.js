const images = require("images");

const fs = require('fs');
const path = require('path');
const src = 'src';
const dist = 'dist';

const dirs = fs.readdirSync(path.resolve(__dirname, src));
const arr = dirs.map(item => {
    const name = item.replace(/\.JPG/i, '');
    return `('${name}', 'upload/${item}')`;


    // images(path.resolve(__dirname, src, item)).size(230, 200).save(path.resolve(__dirname, dist, item), {
    //     quality: 50
    // });
});
console.log(arr.join());
