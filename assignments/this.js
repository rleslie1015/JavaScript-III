/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window
* 2. implicit
* 3. new bindin
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function doesNothing(something) {
    console.log(this);
    return something;
  }
  doesNothing("nope");

  // Principle 2

// code example for Implicit Binding
const robot = {
    greeting: 'bleep blop',
    compute: function(instruction) {
      console.log(`${this.greeting} I will ${instruction} for you`);
    }
  };
  robot.compute('dance');


// Principle 3

// code example for New Binding
function SuperHero(name, power) {
    this.name = name;
    this.power= power;
    this.saveTheDay = function() {
      console.log(`${this.name} has saved the day with his ${this.power}`);
  
    };
  }
  
  const ironman = new SuperHero ('Ironman', 'SUPERSUIT');
  const venom = new SuperHero ('Venom', 'ALIEN ALTEREGO');  
  
ironman.saveTheDay();
venom.saveTheDay();
// Principle 4

// code example for Explicit Binding


const villian = {
    name: "carnage"
}
function evilLaugh() {
    return `muahhahahaha ITS ME ${this.name}`;
}

console.log(evilLaugh.apply(villian))