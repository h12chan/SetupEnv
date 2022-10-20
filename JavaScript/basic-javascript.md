---
layout: default
title: Basic JavaScript
parent: JavaScript
nav_order: 1
---
## Basic JavaScript


## Document Object Model (DOM) Manipulation

```html
<p>
<button id="wrap" class="bg-green" data-snack="carrot"></button>
<button class="bg-red"></button>
<button></button>
</p>
```

Here is an example to get all instances of the argument selector identified in parenthesis.

```javascript
let buttons = document.querySelectorAll('button');
console.log(buttons);

let redButtons = document.querySelectorAll('.bg-red');
console.log(redButtons);

let snackButtons = document.querySelectorAll('[data-snack]');
console.log(snackButtons);
```

While the document.querySelectorAll will return all instances of the argument, document.querySelector returns only the first possible instance.

```javascript
let carrotButton = document.querySelector('[data-snack="carrot"]');
console.log(carrotButton);
```

The <i>Element</i>.matches() method will return a boolean if the property identified matches the selector that called the method.

```javascript
if(carrotButton.matches('.bg-green')) {
    console.log("Yay, the background is green!");
}
```

Specific selector methods:
- document.getElementsById()
- document.getElementsByName()
- document.getElementsByTagName()
- document.getElementsByClassName()
Everything these methods can accomplish can be accomplished with document.querySelector() and document.querySelectorAll().

The <i>Element</i>.classList.<i>method()</i> can modify the class property in an element.  It only works with document.querySelector().
```javascript
let button = document.querySelector('#wrap');

button.classList.add('greenText');
button.classList.remove('bg-red');
button.classList.toggle('bg-green');
if (button.classList.contains('bg-green')) {
    console.log("Eat snacks!");
}
```
The <i>Element</i>.className method can also modify and return the string value of the class property.  It only works with document.querySelector()
```javascript
let button = document.querySelector('#wrap');

// log the string value of the class property
console.log(button.className);
// Add yellow class name to element
button.className += ' yellow';
// Replace all class names on element
button.className = 'bg-red';
```


## Arguments Object
There is a built-in arguments object in JavaScript.
It contains an array of the arguments when the function was called and it is particularly useful when the number
of arguments injected is unknown.

```javascript
function addAll() {
    let total = 0
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
const x = addAll(5, 5000, 500, 50)
console.log(x) // 5555

// https://www.w3schools.com/js/js_function_parameters.asp
```