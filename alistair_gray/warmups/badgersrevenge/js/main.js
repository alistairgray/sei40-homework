console.log("Badger's Revenge");
// # Badger's Revenge
// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
// Your program should:
// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

const revengeOfBadger = { // list of names
  alistair: 3,
  alvaro: 2,
  manda: 5,
  andy: 2,
  brooke: 7,
  bruna: 1,
  carissa: 8,
  david: 5,
  john: 3,
  kyle: 10,
  lucy: 11,
  reece: 4,
  sam: 6,
  stacey: 5
} // object revengeOfBadger

const randomStudent = function(badger){
  for (const key in badger){
    console.log(key.value);
  }; // forin
  console.log(namePick);
}; // function randomStudent

randomStudent(revengeOfBadger);
