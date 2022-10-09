---
layout: default
title: Try Catch Finally
parent: JavaScript
nav_order: 3
---
## Try Catch Finally
There are times when error(s) will occur and it is useful to handle the error with the appropriate message and prompt if necessary.
Luckily, this can be implemented with the try-catch-finally block.  While the finally block is optional, the try-catch is mandatory.
In the following example, we can see how the error is thrown and caught.  The finally block executes regardless of the result.

```javascript
function aNum() {
	// const num = 10
	if (typeof(num) == 'undefined') {
    throw new ReferenceError('This is an error')
  }
}

try {
	const result = aNum()
} catch(e) {
	console.log(e.name, e.message) // "ReferenceError", "This is an error"
  console.log("Declare the variable!") // "Declare the variable!"
} finally {
	console.log("Programming takes patience and practice.") // "Programming takes patience and practice."
}
// https://www.javascripttutorial.net/javascript-throw-exception/
```
