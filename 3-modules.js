// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//const names = require('./4-firstmodulenames');
const {john,peter} = require('./4-firstmodulenames');
const sayHi = require('./5-secondmoduleutils');
const data = require('./6-alternativeflavor')

require('./7-mindgrenade')

//  sayHi('susan')
//  sayHi(john)
//  //sayHi(names.john)
//  sayHi(peter)
//  //sayHi(names.peter)