const fs = require('fs');
const zlib = require('zlib');
// const gzip = zlib.createGzip();
const gunzip = zlib.gunzip();
// const readStream = fs.createReadStream('./example.txt', 'utf8');
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompress.txt');
// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk)
// })
readStream.pipe(gunzip).pipe(writeStream)
// readStream.pipe(gzip).pipe(writeStream)
