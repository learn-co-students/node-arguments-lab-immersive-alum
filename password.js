let passwordLength = process.argv[2]
let numPasswords = process.argv[3]

let error

if (!passwordLength || !numPasswords) {
  error = "Error: Missing argument(s)"
}

if (error) {
  console.log(error);
} else {
  const passwords = []

  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstufvxyz1234567890'

  for (let i = 0; i < numPasswords; i++) {
    let password = ''
    for (let j = 0; j < passwordLength; j++) {
      password += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    }
    passwords.push(password)
  }

  passwords.forEach(p => console.log(p))
}

process.exit(0)
