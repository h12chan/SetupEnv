---
layout: default
title: Testing
nav_order: 7
has_children: true
---

## Testing in the Console
Hack the console to make it display the results along with the variable names by doing this:
```javascript
const name = 'hello';
let where = 'world';
let comment = 'hello world';
let isSunshine = true;
let day = 1;

setInterval(() => {
  isSunshine = !isSunshine;
  day += 1;
  console.log({name, where, comment, isSunshine, day})
}, 1000);
// https://www.youtube.com/shorts/BZGUgRQZyXw
```

## Unit Testing with Jest

## Test Driven Development in JavaScript

## Integration Testing

## End-to-End Testing

## Front-End Testing

## Console (Web API)

- https://developer.mozilla.org/en-US/docs/Web/API/Console_API
