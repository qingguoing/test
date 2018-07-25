const sharp = require('sharp');

const fs = require('fs');
const path = require('path');
const src = 'done/upload';
const dist = 'max';
// const dist = 'upload';

const dirs = fs.readdirSync(path.resolve(__dirname, src));
// console.log(dirs);
// const arr = dirs.map(item => {
//     const name = item.replace(/\.JPG/i, '');
//     return `('${name}', 'upload/${item}', 'upload/max/${item}')`;


    // sharp(path.resolve(__dirname, src, item))
    //   .resize(920, 800)
    //   // .resize(230, 200)
    //   .overlayWith('../water1.png', { gravity: sharp.gravity.southeast})
    //   .toFile(path.resolve(__dirname, dist, item), (error, info)=> {
    //     if (error) {
    //       console.log(error, info, item);
    //     }
    // });
// });


sharp('./logo.png')
  .resize(150, 84)
//   .overlayWith('../water1.png', { gravity: sharp.gravity.southeast})
  .toFile('./logo-min.png', (error, info) => {
      console.log(error, info);
  } );
// sharp('../water.png')
//   .resize(80, 10)
//   .toFile('./water1.png', (error, info) => {
//       console.log(error, info);
//   } );