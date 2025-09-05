const fs =  require('node:fs');

console.log('aditya nigga');



// const content = fs.readFileSync('user.txt', 'utf-8');

// console.log('Content', contents);

fs.readFile('user.txt', 'utf-8', function (error, data) {
  if (error) console.log(error);
  else console.log('hey', data)
});

console.log('aditya nigga nhi hai');


