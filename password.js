// code solution here
var passwordMaker = length => {
  var length = length || 8;
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var password = "";

  for (i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
};

var length = 10,
  number = 1;

if (!process.argv[2] || !process.argv[3]) {
  console.log("Please input valid arguments");
}

if (process.argv[2]) {
  length = process.argv[2];
}

if (process.argv[3]) {
  number = process.argv[3];
}

for (i = 1; i <= number; i++) {
  console.log(passwordMaker(length));
}

process.exit(0);
