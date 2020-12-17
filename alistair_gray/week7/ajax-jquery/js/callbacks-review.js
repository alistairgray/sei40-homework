// const sayHello = function (){
//   console.log('Hello!');
// };
//
// setTimeout(sayHello, 3000)
//
// // Anon inline function for setTimeout
// setTimeout(function(){
//   // The inside code won't run for 3 seconds
//   console.log('Anon Hello!');
// }, 3000)
//
// const runFiveTimes = function(functionToRun){
//   for(let i = 0; i < 5; i++){
//     functionToRun(); // actually run the function give as an argument
//   } // for
// } // runFiveTimes
//
// runFiveTimes(sayHello)

const arr = ['groucho', 'harpo', 'chico'];

// const each = function(array, fnToUse){
//   // 1. loop over array
//   for(let i=0; i < array.length; i++){
//     const currentElem = array[i];
//     console.log('currentElem', currentElem);
//     fnToUse(currentElem);
//   }
//   // 2. inside loop, give each element to fnToUse
// }; // each()
//
// each(arr, function(item){
//   console.log(item);
// });

arr.forEach(function(element, index, array){
  console.log('elem', element, index, array);
});

arr.forEach(console.log); // also does the same thing
