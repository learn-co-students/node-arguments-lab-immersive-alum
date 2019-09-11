

let lengthOfPass = process.argv[2]
let noOfPasswords = process.argv[3]
let passArray = []

function generatePassword(passLength) {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
    for (let i = 0, n = charset.length; i < passLength; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

for(let j = 0; j < noOfPasswords; j++){
    passArray.push(generatePassword(lengthOfPass))
}

passArray.map(p =>{console.log(p)})