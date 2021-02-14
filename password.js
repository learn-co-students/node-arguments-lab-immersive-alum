// code solution here
if (process.argv.length < 4)
{
    console.log(`Wrong number of arguments: ${process.argv.length - 2} given but 2 are required`);
    process.exit(1);
}
const numberOfPasswords = process.argv[3];
const lengthOfPassword = process.argv[2];

for (var i = 0; i < numberOfPasswords; i++)
{
    console.log(generatePassword(lengthOfPassword));
}

function generatePassword(lengthOfPassword)
{
    var password = "";

    for (var i = 0; i < lengthOfPassword; i++)
    {
        const randomCharacterCode = Math.floor(Math.random()*26 + 65);
        password += String.fromCharCode(randomCharacterCode);
    }
    return password;
}

process.exit(0);
