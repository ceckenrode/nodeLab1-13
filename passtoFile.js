var input = process.argv.slice(2).join(" ");
var fs = require('fs');

fs.writeFile('passToFile.txt', input);

fs.readFile('passToFile.txt', "utf8", function(err, data){
  console.log(data);
} );