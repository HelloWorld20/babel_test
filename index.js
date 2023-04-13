let fs = require('fs');
let babel = require('@babel/core');

console.log(process.env.NODE_ENV);

let code = fs.readFileSync('./src/index.js').toString();

babel.transform(code, {
    configFile: './babel.config.js'
}, function(err, result) {
    let { code, ast } = result;

    console.log(code);
    console.log(ast);
});