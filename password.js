let passwordLength = parseInt(process.argv[2])
let times = parseInt(process.argv[3])

function generatePassword() {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let password = ''
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length)
    password = password + chars[randomIndex]
  }
  return password
}

for (let i = 0; i < times; i++) {
  console.log(generatePassword())
}
