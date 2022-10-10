---
layout: default
title: Basic JavaScript
parent: JavaScript
nav_order: 1
---
## Basic JavaScript


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