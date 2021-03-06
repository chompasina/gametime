# Iteration 1 Documentation
## Create Tray

----
### Lesson Plans Used
  * For Testing
    * Intro to Mocha//Unit level Testing in JavaScript: [lessonPlan](https://github.com/turingschool-examples/gametime-testing-journey/)
  * HTML5
    * Intro to Canvas: [lessonPlan](https://github.com/mdn/advanced-js-fundamentals-ck/blob/gh-pages/tutorials/03-object-oriented-javascript/03-canvas-and-object-oriented-javascript.md)
  * JavaScript Tools
    * Intro to JavaScript Build Tools: [lessonPlan](https://github.com/turingschool/lesson_plans/blob/master/ruby_04-apis_and_scalability/javascript-build-tools.markdown)
-----
### Testing the Tray Functionality

#### What is the 'tray' ?
* Our game consists of a child in a lunchroom attempting to catch food items falling from the top of the screen.  The child's means of catching said food is a lunch tray.  There are two categories of food: _healthy_ and _unhealthy_.  Every _healthy_ food item that the child catches should stack upon the tray; the _unhealthy_ food removes a _healthy_ item from the top of the stack i.e. _unhealthy_ food does not stack.  For this iteration we are creating the basic template for said tray.

#### What are we testing ?
* This iteration consists of two tests:
  * Does the tray exist?
  * Can the user move the tray left and right using the left and right arrow keys?

#### What are we using for Testing ?
* Mocha - reference lesson above
* Chai - Gives us assertions

----
## Code
#### Important Notes on Implementation :
_For further additions to code, one might find it beneficial to install the atom package, jshint. It helps one remain constantly mindful of JavaScript's syntactical discrepancies._

_If you decide to change the dimensions of the canvas, edit the conditional inside of ` World.prototype.rightArrow ` accordingly -- i.e.  `if (this.tray.x <= 500)` The '500' would change because the width changed._

1. Link to Unit Test: [tray-test.js](https://github.com/chompasina/gametime/blob/master/test/tray-test.js) // Link to File Tested: [tray.js](https://github.com/chompasina/gametime/blob/master/lib/tray.js)

  * `npm test ./test/tray-test.js`
    * runs individual test

  * Function Tested: `function Tray(settings)`
    * Within the test context `with default attributes`
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
    * Within the test context `with given attributes`
      * Tests that available attributes can successfully be assigned new values.

  * Functions Tested: `Tray.prototype.moveRight` // `Tray.prototype.moveLeft`
    * `context('movement')`
      * Tests tray's ability to move _left_ / _right_
