var passLength = process.argv[2]
var passNum = process.argv[3]

for (var i = 0; i <= passNum; i++) {
  console.log(Array(Number(passLength)+1).join(i))
  done()
}

process.exit(0)
