// str = "cat"
// str = "tucker"
function reverseString(str) {
  let array1 = []
  let string = ""
  for (i=0; i < str.length; i++){
      array1.unshift(str[i])
  }
  string = array1.join('')

  return string
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));
  console.log(array1)
  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
