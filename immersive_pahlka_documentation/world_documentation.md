# Iteration 2 Documentation
## Create World
----
### Lesson Plans Used
  * For Testing
    * intro to Mocha//Unit level Testing in JavaScript: [lessonPlan](https://github.com/turingschool-examples/gametime-testing-journey/)
  * HTML5
    * intro to Canvas: [lessonPlan](https://github.com/mdn/advanced-js-fundamentals-ck/blob/gh-pages/tutorials/03-object-oriented-javascript/03-canvas-and-object-oriented-javascript.md)
  * JavaScript Tools
    * intro to JavaScript Build Tools: [lessonPlan](https://github.com/turingschool/lesson_plans/blob/master/ruby_04-apis_and_scalability/javascript-build-tools.markdown)
-----
### Testing the World Functionality

#### What is the 'world' ?
* The world is essentially the canvas-- i.e. the platform upon which our game happens.

#### What are we testing ?
* This iteration consists of two tests:
  * Does the world exist?
  * Can the user move the tray left and right using the left and right arrow keys?

#### What are we using for Testing ?
  * Mocha - reference lesson above
  * Chai - Gives us assertions

----
## Code
#### Important Notes on Implementation :

_If you decide to change the dimensions of the canvas, edit the conditional inside of ` World.prototype.rightArrow ` accordingly -- i.e.  `if (this.tray.x <= 500)` The '500' would change because the width changed._

1. Link to Unit Test: [world-test.js](https://github.com/chompasina/gametime/blob/master/test/world-test.js) // Link to file tested: [world.js](https://github.com/chompasina/gametime/blob/master/lib/world.js)
  * `npm test ./test/world-test.js`
    * runs individual test

  * Function Tested: `function World(width, height)`
    *

  * Functions Tested: `World.proptype.rightArrow` // `World.prototype.left`
    * `context('with default attributes')`
      * Tests that when right arrow is pressed, the the tray moves accordingly / vise-versa
