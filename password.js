function generatePassword(length) {
  var pswdChar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var password_arr = Array(length);

  for (var i = 0; i < password_arr.length; i++) {
    password_arr[i] = pswdChar[Math.floor(Math.random() * (pswdChar.length - 0))]
  }
  return password_arr.join('')
}


function cliPasswordGenerator(args) {
  args = args.slice(2);
  // console.log(args);
  for (var i = 0; i < parseInt(args[1]); i++) {
    console.log(generatePassword(parseInt(args[0])));
  }
};

cliPasswordGenerator(process.argv)
