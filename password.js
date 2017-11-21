var length = process.argv[2]
var times = process.argv[3] || 1

const generatePassword = (length=10) => {

  let text = "";
  let key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += key[(Math.floor(Math.random() * key.length))]
  }

  return text;
}

for (var i = 0; i < times; i++){
    console.log(generatePassword(length))
}

process.exit(0)
