const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console
_(numbers).each(function(item){
  console.log("Number:", item);
});

// Iterate through numbers and multiply each one of them by 5
_(numbers).each(function(item){
  const output = item * 5
  console.log("Number:", item, "Output:", output);
});

// Iterate through numbers and reduce it by adding them together
const sum = _(numbers).reduce(function(runningTotal, item){
const total = runningTotal + item
console.log('Running Total:', runningTotal, '+', 'Number:', item, '=', total);
});

// Get an array of all of the people in people that have the username "E"
const ePeople = people.filter(item => item.username === "E");
console.log('E Usernames:', ePeople);

// Find the first object in people that has the id of 3
const id3 = people.find(item => item.id === 3);
console.log('ID:3', id3);

// Find the first person who has an age of less than 50
const youngPpl = people.find(item => item.age < 50);
console.log('Young Person', youngPpl);

// Get an array of all of the people with an age of over 60
const oldPpl = people.filter(item => item.age > 60);
console.log('Old People', oldPpl);

// Remove all of the people with an age less than 40
const order66 = people.reject(item => item.age < 40)
console.log(people);
