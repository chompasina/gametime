# Iteration 1 Documentation
## Initial Canvas Creation//Create Tray

----
### Lesson Plans Used
  * For Testing
    * intro to Mocha//Unit level Testing in JavaScript: [lessonPlan](https://github.com/turingschool-examples/gametime-testing-journey/)
  * HTML5
    * intro to Canvas: [lessonPlan](https://github.com/mdn/advanced-js-fundamentals-ck/blob/gh-pages/tutorials/03-object-oriented-javascript/03-canvas-and-object-oriented-javascript.md)
  * JavaScript Tools
    * intro to JavaScript Build Tools: [lessonPlan](https://github.com/turingschool/lesson_plans/blob/master/ruby_04-apis_and_scalability/javascript-build-tools.markdown)
-----
### Testing the Tray Functionality

#### What is the 'tray' ?
* Our game consists of a child in a lunchroom attempting to catch food items falling from the top of the screen.  The child's means of catching said food is a lunch tray.  There are two categories of food: _healthy_ and _unhealthy_.  Every _healthy_ food item that the child catches should stack upon the tray; the _unhealthy_ food removes a _healthy_ item from the top of the stack i.e. _unhealthy_ food does not stack.  For this iteration we are creating the basic template for said tray.

#### What is the 'world' ?
* The world is essentially the canvas-- i.e. the platform upon which our game happens.

#### What are we testing ?
* This iteration consists of two tests:
  * Does the test exist?
  * Can the user move the tray left and right using the left and right arrow keys?

#### What are we using for Testing ?
* Mocha - reference lesson above

----
## Code
#### Important Notes on Implementation :
_ For further additions to code, one might find it beneficial to install the atom package, jshint. It helps one remain constantly mindful of JavaScript's syntactical discrepancies._

_If you decide to change the dimensions of the canvas, edit the conditional inside of ` World.prototype.rightArrow ` accordingly -- i.e.  `function() { if (this.tray.x <= 500)` The '500' would change because the width changed._

1. Link to Unit Test: [tray-test.js](https://github.com/chompasina/gametime/blob/master/test/tray-test.js) // Link to File Tested: [tray.js](https://github.com/chompasina/gametime/blob/master/lib/tray.js)

  * `npm test ./test/tray-test.js`
    * runs individual test

  * Function Tested: `function Tray(settings)`
    * `context('with default attributes')`
      * Tests that our Tray is instantiated with the following attributes:
        * width
          * width of tray
        * height
          * height of tray
        * x-coordinate
          * horizontal position of tray relative to canvas
        * y-coordinate
          * vertical position of tray relative to canvas
        * world (associates the tray object with the 'world' object)
          * 'world' object is essentially the canvas
        * speed
          * how fast the tray travels upon keypress
    * `context('with given attributes')`
      * Tests that available attributes can successfully be assigned new values.

  * Functions Tested: `Tray.prototype.moveRight` // `Tray.prototype.moveLeft`
    * `context('movement')`
      * Tests tray's ability to move _left_ / _right_

2. Link to Unit Test: [world-test.js](https://github.com/chompasina/gametime/blob/master/test/world-test.js) // Link to file tested: [world.js](https://github.com/chompasina/gametime/blob/master/lib/world.js)
  * `npm test ./test/world-test.js`
    * runs individual test

  * Function Tested: `function World(width, height)`
    *

  * Functions Tested: `World.proptype.rightArrow` // `World.prototype.left`
    * `context('with default attributes')`
      * Tests that when right arrow is pressed, the the tray moves accordingly / vise-versa
