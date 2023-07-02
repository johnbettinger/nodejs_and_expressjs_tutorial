const {readFileSync,writeFileSync} = require('fs'); // curly brace declaration is known as object destructuring syntax where a property or method from an object is assigned to a variable with the same name

console.log('start');

// the following is the same thing for readFileSync with different syntax
//const fs = require('fs');
//fs.readFileSync

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')



console.log(first, second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'}) // flag: a means append

console.log('done with this task');
console.log('starting the next one');
