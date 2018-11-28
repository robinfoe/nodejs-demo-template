// var express = require('express');
// const app = express();
// const port = 3000;
// app.use('/', express.static('public'));
// app.listen(port, function() {
//   console.log("Server Started at port 3000");
// });






// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
// require('@babel/register')({
//     presets: [ 'env' ]
// })

require('@babel/register')

// Import the rest of our application.
module.exports = require('./src/server/webfront-init.js')