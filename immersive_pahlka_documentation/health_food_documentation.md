# Iteration 4 Documentation
## Create Health Food

----
### Lesson Plans Used
  * For Testing
    * Testing the Canvas Functionality/Stubbing: [lessonPlan](https://github.com/turingschool-examples/gametime-testing-journey/tree/sinon)

-----
### Testing the Tray Functionality

#### What is the 'tray' ?
* Our game consists of a child in

----
## Code
#### Important Notes on Implementation :

1. Link to Unit Test: [tray-test.js](https://github.com/chompasina/gametime/blob/master/test/tray-test.js) // Link to File Tested: [tray.js](https://github.com/chompasina/gametime/blob/master/lib/tray.js)

* `npm test ./test/tray-test.js`
  * runs individual test

* Function Tested: `function Tray(settings)`
  * `context('with default attributes')`
    * Tests that our Tray is instantiated with the following attributes:
      * width
        * width of tray

* Functions Tested:
`Tray.prototype.moveRight` // `Tray.prototype.moveLeft`
  * `context('movement')`
    * Tests tray's ability to move _left_ / _right_
