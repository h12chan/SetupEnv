---
layout: default
title: Error Handling
parent: JavaScript
nav_order: 3
---
## Defensive Programming
When you program, it is sometimes important to prepare for inadvertent usage of the program by practicing defensive programming.  For example, if you require input from the user, make sure to add defensive programming logic such as checking whether the input is the type that should be entered.  Otherwise, the program may return with a runtime error when it processes the input. The brief example below illustrates a simple defensive programming logic.
```javascript
const num = Number(prompt("Enter a number:"))
if(isNaN(num) == true) {
	console.log("Enter a valid number!")
} else {
	console.log(`It is of type ${typeof(num)}`)
  console.log(`You entered: ${num}`)
}
```

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
