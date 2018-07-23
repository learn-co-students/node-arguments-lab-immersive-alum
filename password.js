// code solution here
const x = process.argv[2]
const y = process.argv[3]
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"

for(let i = 0; i < y; i++) {
  let password = ''
  for(let j = 0; j < x; j++) {
    password += chars[Math.floor(Math.random() * chars.length)]
  }
  console.log(password)
}
