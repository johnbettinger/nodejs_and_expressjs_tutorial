// in our previous use of the fs module we assigned the read file to a variable
// when file sizes get too big we will get an error and can't store the entire file in a single variable

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');

// default buffer size 64kb
// last buffer - remainder
// highwaterMark - control size
//const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' }) 
                                    // the two dots create an error event that we catch below
                                    // encoding and highWaterMark can be used together

stream.on('data',(result)=>{

    console.log(result);

})

stream.on('error', (err) => {
    console.log(err);
})