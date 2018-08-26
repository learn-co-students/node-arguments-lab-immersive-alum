// code solution here
passwords = ''
var count = 0
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
while (count < parseInt(process.argv[3])) {
  for(var i = 0; i < parseInt(process.argv[2]); i++) {
    passwords += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  passwords += '\n'
  count++
}
process.stdout.write(passwords)
