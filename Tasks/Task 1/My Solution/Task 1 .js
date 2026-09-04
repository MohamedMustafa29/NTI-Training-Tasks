//Q_1
let a =10;
let b=19;
console.log(`the value Of a before Swap is ${a}`);
console.log(`the value Of b before Swap is ${b}`);
[a,b]=[b,a]
console.log(`the value Of a after Swap is ${a}`);
console.log(`the value Of b after Swap is ${b}`);

//Q_2

function getMinMax(...numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return [min, max];
}

const numbersArray = [15, 3, 42, 8, 99, 23];

const [minVal, maxVal] = getMinMax(...numbersArray);

console.log("Min Value:", minVal); 
console.log("Max Value:", maxVal); 


