process.argv.shift();
process.argv.shift();

let randomPasswords = [];
let validCharacters = "abcdefghijklmnopqrstuvwxyz1234567890";
if (!process.argv[1]) {
  console.log("Error!");
  return "Error!";
}

let passwordLength = process.argv[0];
let passwordNumberToCreate = process.argv[1];

const generatePassword = (passwordLength) => {
  let password = [];
  let chars = validCharacters.split("");
  while (password.length < passwordLength) {
    password.push(chars[2]);
  }
  randomPasswords.push(password.join(""));
};

for (let i = 1; i <= passwordNumberToCreate; i++) {
  generatePassword(passwordLength);
}

randomPasswords.forEach((x) => console.log(x));
