// CommonJS, every file is module (by default)
// modules - Encapsulated code (only share minimum)
const names = require('./4.names');
const sayHi = require('./5.utils');
const data = require('./6.alternative-flavour')
require('./7.mind-granade')

console.log(data)
sayHi('samiran')
sayHi(names.sam)
sayHi(names.sami)