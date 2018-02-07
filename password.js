// code solution here

var passwordLength = process.argv[2]
var numberOfPasswords = process.argv[3]

for (var i = 0; i <= numberOfPasswords; i++) {
  console.log(Array(Number(passwordLength)+1).join(i))
  done()
}
process.exit(0)
