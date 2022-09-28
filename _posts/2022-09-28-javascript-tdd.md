## Beginner Steps to Using Jest with JavaScript in Test-Driven Development
(a) Red, Green, Refactor (iterate)

npm init -y
npm install jest --save-dev // runs files that end in something.test.js
"test": "jest --watchAll --verbose" // in package.json under scripts, add it
npm run test // your first failing test!
npm install @types/jest --save-dev // install types to jest
{
  "typeAcquisition": {
    "include": [
      "jest"
    ]
  }
} // make jsconfig.json file and input it
can install Wallaby.js VS Code plugin (paid); tells you directly in editor whether tests passing

describe('My Stack', () => {
  it('is created  empty', () => {
    const stack = new Stack();
    
    expect(stack.top).toBe(-1); // toBe is a matcher to the correct value
  });  // test or it function; both do the same thing
  
  it.todo('can push to the top'); // make the test pass, hold-off on implementation while you figure things out
  
  it.todo('can pop off');
})

// continue at 7:45 with this video: 
