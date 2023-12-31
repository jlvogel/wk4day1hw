// Hamster
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price


// Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created hamster class"
// Easy Mode Make sure it works so far

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  };
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble")
  }
  getPrice() {
    return this.price
  }
};

const hamster = new Hamster("Charles");
console.log(hamster);
hamster.wheelRun();
hamster.eatFood();
console.log(hamster.getPrice());



// Person
// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
// 

// Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created person class"
// Easy Mode Keep Going and save and run code

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  };
  getName() {
    return this.name;
  };
  getAge() {return this.age;};
  getWeight() {return this.weight;};
  greet() {console.log(`Hello ${this.name}!`);};
  eat() {this.weight++; this.mood++;};
  exercise() {this.weight--;};
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount+=10;
  };
  buyHamster(hamster){
    this.hamsters.push(hamster);
    this.mood+=10;
    this.bankAccount-=hamster.getPrice();
    hamster.owner = this.name
  };
};

const john = new Person("John");
console.log(john);
console.log(john.getName());
console.log(john.getAge());
console.log(john.getWeight());
john.greet();
john.eat();
console.log(john);
john.exercise();
console.log(john);
john.ageUp();
console.log(john);
john.buyHamster(hamster);
console.log(john);

// Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.

// Instantiate a new Person named Timmy
// Age Timmy five years
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// Age Timmy 9 years
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
// Age Timmy 15 years
// Have Timmy eat twice
// Have Timmy exercise twice
// Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created timmys story" Easy Mode Keep Going Save and Run Code


const timmy = new Person("Timmy");
// Age Timmy five years
// for(let year = 0; year <= 5; year++) {
//   timmy.ageUp();
// };
// //Have Timmy eat five times
// for (let eat = 0; eat <= 5; eat++) {
//   timmy.eat();
// }
// //Have 

// yeah originally I was going to just make for loops
// but why not just make a function that runs a
// number of times then just call that function as needed.

const numTimes = (obj, method, num)=>{
  for(let i = 1; i <= num; i++) {
    obj[method]();
  };
};
// It works!!!  

// Age Timmy five years
numTimes(timmy, "ageUp", 5);
console.log(timmy);

// Timmy eats five times
numTimes(timmy, "eat", 5);
console.log(timmy);

// Timmy exercises five times
numTimes(timmy, "exercise", 5);
console.log(timmy);

// Age Timmy nine years
numTimes(timmy, "ageUp", 9);
console.log(timmy);

// Create a hamster named "Gus"
const gus = new Hamster("Gus");
console.log(gus);

// Set Gus's owner to the string "Timmy"
// note this will automatically happen when Timmy
// buys Gus.

// Have Timmy "buy" Gus
timmy.buyHamster(gus);
console.log(timmy);

// Age Timmy 15 years
numTimes(timmy, "ageUp", 15);
console.log(timmy);

// Have Timmy eat twice
numTimes(timmy,"eat", 2);

// Have Timmy exercise twice
numTimes(timmy,"exercise", 2);
console.log(timmy);


// Chef Make Dinners
// class Dinner {

// }

// class Chef {

// }
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners


// Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "Dinner is served" Easy Mode Keep Going Save and Run Your Code

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  };
};

class Chef {
  constructor(name) {
    this.name = name;
    this.dinnersMade = [];
  };
  makeDinner(appetizer, entree, dessert) {
    const dinner = new Dinner(appetizer, entree, dessert);
    this.dinnersMade.push(dinner);
    return dinner;
  };
};

const leon = new Chef("Leon");
console.log(leon.makeDinner("Salad", "Spaghetti", "Chocolate Cake"));
console.log(leon.makeDinner("breadsticks", "pizza", "cookie"));
console.log(leon.makeDinner("fried pickles", "hamburger", "ice cream"));
console.log(leon);

