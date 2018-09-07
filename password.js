// code solution here
let leng = process.argv[2]
let numOfPasswords = process.argv[3]
let i = 0
let passwords = []
 const makePassword = (leng) => {
  let password = ''
  let j = 0
  while(j < leng){
    password += 'a'
    j++
  }
  return password
}
 while(i < numOfPasswords){
  passwords.push(makePassword(leng))
  i++
}
 console.log(passwords[0])
process.exit(1)
