function aNum() {
	// const num = 10
	if (typeof(num) == 'undefined') {
    throw new ReferenceError('This is an error')
  }
}

try {
	const result = aNum()
} catch(e) {
	console.log(e.name, e.message)
  console.log("Declare the variable!")
} finally {
	console.log("Programming takes patience and practice.")
}
// https://www.javascripttutorial.net/javascript-throw-exception/
