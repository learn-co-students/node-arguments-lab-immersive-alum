// code solution here
process.argv.shift()
process.argv.shift()
let length = parseInt(process.argv[0])
let num = parseInt(process.argv[1])
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let passwords = []

for (i = 0; i < num; i++) {
  let randomstring = '';
  for (j = 0; j < length; j++) {
    let rnum = Math.floor(Math.random() * chars.length)
    randomstring += chars.substring(rnum, rnum+1);
    debugger
  }
  passwords.push(randomstring)
}
console.log(passwords[0])
// console.log(passwords[0])
process.exit(1)
