console.log('Hello Underscore');

// example data
const bros = ['Groucho', 'Harpo', 'Chico'];

// Style No 1:
// _.each(bros, function(){});

// Style No 2:
_(bros).each(function(item, i){
  // This is the code that runs for each item in the array
  // It gets access to the current item in the array as we loop through all items
  // via the argument we define for this callback function
  console.log(i, item);

}); // each loop

// Underscore.each also works for objects!
const groucho = {
  name: 'Groucho',
  instrument: 'Guitar',
  vice: 'cigars'
};

_(groucho).each(function(val, key) {
  console.log(key, val);
});

console.log('ES6 Arrow Functions! ===================>');

bros.forEach((item, i) => {
  console.log(i, item);
});

// Simplest version: no parentheses around single argument or curly brackets
// this will create an implicit return. Note, 'this' has special requirements
bros.forEach( item => console.log(item) );


// named functions
// const myFunc = function(){};
// // vs
// const myFunc = () => {};

console.log('Map ======================');

// map() transforms an input array of values into an output of values
// according to what your callback function returns

const nums = [1,2,3,4,5];

const output = _(nums).map(function(item){
  return item * 2;
});

console.log(nums);
console.log(output);

const outputArrow = _(nums).map(n => n * 2);
console.log(outputArrow);

const es6map = nums.map(item => item * 2)
console.log(es6map);

// reduce() takes an input array and boils it down
// to a single value by applying the code you give it
// in your callback function

const sum = _(nums).reduce(function(runningTotal, item){
  console.log('---------------------------------');
  console.log('runningTotal:', runningTotal);
  console.log('item:', item);
  const newTotal = runningTotal + item;
  console.log('newTotal:', newTotal);
  return newTotal
}); // sum

console.log('reduced sum', sum);

const joined = _(bros).reduce(function(str, bro){
  return str + '-' + bro
});

console.log('reduced bros:', joined);

const arrowReduce = _(nums).reduce((acc, i) => acc + i);
console.log('arrowReduce:', arrowReduce);

const es6reduce = nums.reduce((acc, item) => acc + item);
console.log('es6reduce:', es6reduce);

console.log('ActiveRecord-Style Underscore Methods');
// Methods for searching through data -
// usually an array of objects

const brothers = [
  {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44, nums: [1,2,3,5]},
  {name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42, nums: [1,2,3]},
  {name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39, nums: [1,2,3,5]}
];

// searches inside array of objects
const harpist = _(brothers).findWhere({instrument: 'guitar', age: 39});
console.log(harpist);

// Vanilla JS/ES6 equivalent: slightly different, instead of passing in an object
// to use to test for a match, you pass in a test function, and if the function
// returns true, the current item from the array is returned
const es6harpist = brothers.find(item => item.instrument === 'harp');
console.log('es6harpist:', es6harpist);


// Like ActiveRecord .where : find ALL matching 'rows'
const allGuitarists = brothers.filter(item => item.instrument === 'guitar' || item.age > 40)
console.log('allGuitarists', allGuitarists);
