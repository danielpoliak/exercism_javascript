//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = n => {
  if (n < 1) throw new Error("Only positive numbers are allowed");
  let numberOfSteps = 0
  let x = n

  while(x !== 1) {
    if(x % 2 === 0) {
      x = x/2
    } else {
      x = x*3 + 1
    }
    numberOfSteps++
  }
  return numberOfSteps
};
