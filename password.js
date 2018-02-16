if (process.argv.length !== 4) {
    console.log("Error: Incorrect number of arguments.");
    process.exit(1);
}

for (let i = 0; i < 2; i++) {
    process.argv.shift()
};

let length = process.argv[0],
    number = process.argv[1],
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");


function generatePassword() {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += possible[(Math.floor(Math.random() * possible.length))];
    }
    console.log(result);
}

for (let i = 0; i < number; i++) {
    generatePassword();
}

process.exit(0);