# Iteration 1 Documentation
## Initial Canvas Creation//Create Tray

----
### Lesson Plans Used :
  * For Testing
    * intro to Mocha//Unit level Testing in JavaScript: [lessonPlan](https://github.com/turingschool-examples/gametime-testing-journey/)
  * HTML5
    * intro to Canvas: [lessonPlan](https://github.com/mdn/advanced-js-fundamentals-ck/blob/gh-pages/tutorials/03-object-oriented-javascript/03-canvas-and-object-oriented-javascript.md)
  * JavaScript Tools
    * intro to JavaScript Build Tools: [lessonPlan](https://github.com/turingschool/lesson_plans/blob/master/ruby_04-apis_and_scalability/javascript-build-tools.markdown)
-----
### Testing the Trey Functionality

#### What is the 'tray' ?
* Our game consists of a child in a lunchroom attempting to catch food items falling from the top of the screen.  The child's means of catching said food is a lunch tray.  There are two categories of food: _healthy_ and _unhealthy_.  Every _healthy_ food item that the child catches should stack upon the trey; the _unhealthy_ food removes a _healthy_ item from the top of the stack i.e. _unhealthy_ food does not stack.  For this iteration we are creating the basic template for said trey.

#### What are we testing ?
* This iteration consists of two tests:
  * Does the test exist?
  * Can the user move the trey left and right using the left and right arrow keys?

### Code :
  * Link to Test: [trey-test.js]()
