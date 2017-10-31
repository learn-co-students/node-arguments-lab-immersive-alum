// code solution here

process.argv.shift()
process.argv.shift()

var len = process.argv[0]; // length of passwords
var num = process.argv[1]; // number of passwords

if (num === undefined) {
  console.log('wrong number of arguments. there should be 2');
}

function getPasswords(length) {

  let chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'
  let password = ''

  for (let i = 1; i <= length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)]
  }

  return password
}

for (var j = 1; j <= num; j++) {
  console.log(getPasswords(len));
}

process.exit(0)
