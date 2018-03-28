const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGunzip();

const inFile = fs.createReadStream('./zip.js');
const outFile = fs.createWriteStream('./a.js');

inFile.pipe(gzip).pipe(outFile);