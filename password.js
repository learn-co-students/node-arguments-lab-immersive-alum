// code solution here
var length = process.argv[2]
var passwordNum = process.argv[3]

function generatePassword(len){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
for (var i = 0; i < passwordNum; i++){
    console.log(generatePassword(length))
}

process.exit(0)