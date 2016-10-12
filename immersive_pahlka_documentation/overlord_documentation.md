# Iteration 3 Documentation
## Create Overlord

---
### Lesson Plans Used
  * See Tray and World documentation for Lesson Plans
  
----
### Testing the Overlord Functionality

#### What is the 'overlord'?
* The 'overlord' is short for Empty Calorie Overlord, who is our adversary in the game. This figure releases _unhealthy_ food that our player should try to avoid. 

#### What are we testing? 
* This iteration consists of two tests:
  * Does the overlord exist?
  * Does the overlord move to the right and left without stopping?
  
----
## Code

1. Link to Unit Test: [overlord-test.js](https://github.com/chompasina/gametime/blob/master/test/overlord-test.js) // Link to File Tested: [overlord.js](https://github.com/chompasina/gametime/blob/master/lib/overlord.js)

*  `npm text ./test/overlord-test.js`
  * runs individual test
  
* Function Tested: `function Overlord(settings)`
  * Within the test context `with default attributes`
    * Tests that the Overlord is instantiated with the following attributes: 
      * width: width of overlord object
      * height: height of overlord object
      * x-coordinate: horizontal position of overlord
      * y-coordinate: vertical position of overlord on the canvas
      * world
      * speed: how fast our speedy overlord paces above our player at the top of the canvas 
  * Within the test context `with given attributes`
    * Tests that the available attributes can successfully assigned new values.
  * Within the test context `movement`
    * Tests that the overlord moves back and forth 
  