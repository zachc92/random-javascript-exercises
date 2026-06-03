// ** Searching Algorithm **

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };
// Object.setPrototypeOf(table, head);

// let bed = {
//   sheet: 1,
//   pillow: 2
// };
// Object.setPrototypeOf(bed, table);

// let pockets = {
//   money: 2000
// };
// Object.setPrototypeOf(pockets, bed);



// ** Where does it write? **

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// It writes to rabbit. "this" refers to whatever object the method is called on, so in 
// this instance, the eat() function adds the "full" value to rabbit with a value of true



// ** Why are both hamsters full? **

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  }
};

let speedy = {};
Object.setPrototypeOf(speedy, hamster);

let lazy = {};
Object.setPrototypeOf(lazy, hamster);

// This one found the food
speedy.eat("apple");
console.log(`Speedy: ${speedy.stomach}`); // apple

// This one also has it, why? fix please. 
// Lazy was getting the apple because we were modifying the hamster stomach array (since speedy and lazy don't have their own stomachs,
// the this assignment refers to the inherited stomach from the hamster object.) We fix this by giving each hamster their own stomach

// The way I "fixed" this will result in the stomach being cleared any time a hamster eats something, but I wanted to practice inheritance.
// Also maybe a hamster wouldn't eat until its stomach is empty.
console.log(`Lazy: ${lazy.stomach}`); // apple