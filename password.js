// // code solution here
// if (process.argv.length = 4) {
//   process.argv.shift()
//   process.argv.shift()
//   passwords = []
//   for (i = 0; i < process.argv[1]; i++) {
//     var randomstring = Math.random().toString(36).slice(-process.argv[0]);
//     passwords.push(randomstring)
//   }
//   console.log(passwords[0])
// } else {
//   // "$ node password 10 2" command must return password with length 10:
//   console.log("You must enter the number of passwords to be generated, and their length (two arguments)")
// }

var generatePassword = function generatePassword(length, charset) {
  var length = length || 8,
    charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    password = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  return password
}

var length = 10,
  number = 1
var argv = process.argv

if (!argv[2] || !argv[3]) {
  console.log('Please provide an argument, e.g., 5 or 5 10')
  process.exit(1)
}
if (argv[2]) {
  length = parseInt(argv[2], 10)
}
if (argv[3]) {
  number = parseInt(argv[3], 10)
}

for (var i = 1; i <= number; i++) {
  console.log(generatePassword(length))
}

process.exit(0)