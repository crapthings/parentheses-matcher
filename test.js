const parser = require('./index')

console.log(JSON.stringify(parser('test(1) test(2) test(nest(nest(test))) test123(wow)'), null, 2))
