// code solution here
// the tests are providing the input so you don't need a CLI script asking for length / number of passwords req'd

// function to take in 2 inputs and generate passwords:
var generatePassword = function generatePassword(length) {
  const charset =
    "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
};

// get the characters and count arg from argv
var characters = process.argv[2];
var count = process.argv[3];

// call generatePassword desired number of times, print each result
for (var i = 0; i < count; i++) {
  console.log(generatePassword(characters));
}

process.exit(0);
