const randomstring = require('randomstring')

process.argv.shift()
process.argv.shift()

let n = 0
while (n < parseInt(process.argv[1])) {
  console.log(randomstring.generate(parseInt(process.argv[0])))
}

process.exit(0)
