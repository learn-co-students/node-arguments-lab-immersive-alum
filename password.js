const LENGTH = parseInt(process.argv[2], 10)
const NUM_PWS = parseInt(process.argv[3], 10)
var passwords = []

function generatePassword() {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lower = 'abcdefghijklmnopqrstuvwxyz'
  var digit = '0123456789'
  var all = upper + lower + digit

  /**
   * generate random integer not greater than `max`
   */

  function rand (max) {
    return Math.floor(Math.random() * max)
  }

  /**
   * generate random character of the given `set`
   */

  function random (set) {
    return set[rand(set.length - 1)]
  }

  /**
   * generate an array with the given `length`
   * of characters of the given `set`
   */

  function generate (length, set) {
    var result = []
    while (length--) result.push(random(set))
    return result
  }

  /**
   * shuffle an array randomly
   */
  function shuffle (arr) {
    var result = []

    while (arr.length) {
      result = result.concat(arr.splice(rand[arr.length - 1]))
    }

    return result
  }
  /**
   * do the job
   */
  function password (length) {
    var result = [] // we need to ensure we have some characters

    result = result.concat(generate(1, upper)) // 1 upper case
    result = result.concat(generate(1, lower)) // 1 lower case
    result = result.concat(generate(1, digit)) // 1 digit
    result = result.concat(generate(length - 3, all)) // remaining - whatever

    return shuffle(result).join('') // shuffle and make a string
  }

  return password(LENGTH)
}

function run() {

  if (typeof LENGTH == 'undefined' || typeof NUM_PWS == 'undefined'){
    console.log("Invalid input. Must enter two values.")

  } else if (isNaN(LENGTH) || isNaN(NUM_PWS) || LENGTH <= 0 || NUM_PWS <= 0 ) {
    console.log("Invalid input. Values must be positive integers.")

  } else {
    for (var i = 0; i < NUM_PWS; i++) {
      passwords.push(generatePassword())
    }

    for (var i = 0; i < passwords.length; i++) {
      console.log(passwords[i])
    }
  }
}

run()
process.exit(0)

// Implement a Node script password.js which takes 2 CLI arguments and prints random passwords based on the arguments.

// Use two arguments: length (first) and a number of passwords (second) to print, so that node password 2 2 and node password 10 3 are valid commands. The former will print 2 passwords with the length of 2 and the latter 3 passwords with the length of 10.

// Optional: implement generatePassword() function in the password.js to get random passwords. The name of the function doesn't matter. You don't even have to have a separate function, you can just implement the code in the file without a function. If it's too hard, look up the implementation online. The password generation is not the focus of this lab, so we won't test your passwords on strength or randomness. Just do your best not to hard code them. ;)

// Optional: Output error messages when the type of CLI arguments is wrong or when there's only 1 argument instead of 2.

// Finish program with process.exit(0)
