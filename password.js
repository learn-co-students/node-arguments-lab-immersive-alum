// code solution here

const len = process.argv[2]
const num = process.argv[3]

function generatePassword(len) {
    var length = len,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function generateMultiplePasswords(len, num){
    for (let i=0; i < num; i++){
        console.log(generatePassword(len))
    }
}

generateMultiplePasswords(len, num)

process.exit(0)
