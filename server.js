console.log("Hello world");
//module
// const os = require('os')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
const path = require('path');
// console.log(path.dirname(__filename));
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename))

const add = require('./modules');
console.log(add.add(2,2));
// we are missing some JS APIs like Fetch but we can download them as packages from npm

//CRUD with files is possible
const fs = require('fs');
fs.readFile('./files/file.txt', 'utf8' , (err, data) => {
    if(err) throw err;
    console.log(data);
})
process.on('uncaughtException', err => {
    console.error(`Error: ${err}`);
})
fs.writeFile(path.join(__dirname, 'files', 'write.txt'), 'I wrote this with node', (err) => {
    if(err) throw err;
    console.log('wrote...');
    
})
