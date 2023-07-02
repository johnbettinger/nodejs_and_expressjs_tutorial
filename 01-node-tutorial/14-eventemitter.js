
// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response',()=>{ // subscribing to the event (listening for it)
    console.log(`data received `)
})


customEmitter.on('response',()=>{ // subscribing to the event (listening for it)
    console.log(`some other logic here `)
})

customEmitter.emit('response') // emitting the event
                               // you need to subscribe to the event before it is emitted

customEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} with id : ${id} `);
})

customEmitter.emit('response', 'john', 34)

