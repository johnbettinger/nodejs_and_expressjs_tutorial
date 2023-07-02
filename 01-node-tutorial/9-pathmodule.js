const path = require('path')

console.log(path.sep);

const filePath = path.join('/content','subfolder','test.txt')

console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt') // will point to directory where app.js is
console.log(absolute);