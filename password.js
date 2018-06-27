// code solution here
function generatePassword(len) {
  String.fromCodePoint(
    ...Array.from({ length: len }, () => Math.floor(Math.random() * 57) + 65)
  );
}

try {
  if (!process.argv[2] || !process.argv[3]) throw "Enter two arguments";
  if (
    Number.isInteger(process.argv[2]) !== true ||
    Number.isInteger(process.argv[3]) !== true
  )
    throw "arguments are not integers. Enter integers as arguments";

  for (let i = 0; i < process.argv[3]; i++) {
    generatePassword(process.argv[2]);
  }
} catch (error) {
  console.log("Error: " + error + ".");
}

process.exit(0);
