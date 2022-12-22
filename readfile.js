const  {readFileSync,writeFileSync} = require('fs');
const first = readFileSync("./first.txt",'utf-8');
const second = readFileSync("./second.txt",'utf-8');
const third = writeFileSync('./result.txt',`hello this is my file with content of ${first} and ${second}`);

console.log(first , second);
console.log(second);