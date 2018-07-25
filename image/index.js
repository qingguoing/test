var im = require('imagemagick');
const path = require('path');
var fs = require('fs');
im.resize({
  srcData: fs.readFileSync(path.resolve(__dirname, 'A-00001.jpg'), 'binary'),
  width: 230,
  height: 200,
  quality: 0.5,
}, function(err, stdout, stderr){
  if (err) console.log(err);
  fs.writeFileSync(path.resolve(__dirname, 'B-00001.jpg'), stdout, 'binary');
  console.log('resized kittens.jpg to fit within 256x256px')
});