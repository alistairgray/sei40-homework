// Reverse -----------------------------------------------
arr = [1,2,3,4,5];
revArr =[]

const reverseArr = arr.map(item => revArr.unshift(item));

console.log(revArr);

// Flatten -----------------------------------------------
preFlaArr = ["Hello", ["World", 42]];

const flatArr = [].concat.apply([], preFlaArr);

console.log(flatArr);
