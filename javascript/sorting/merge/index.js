'use strict';


// With this build, we are going to create two functions. First being a function that has an empty array that we push into based on the conditional statements created. We then call this function within our second function where we are going to sort the array.

function merge(left, right) {
  let firstArr = [];
  // setting while loop to test the left and right side indexes for which side is smaller than the other.
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      firstArr.push(left.shift());
    }
    else{
      firstArr.push(right.shift());
    }
  }
  return [...firstArr, ...left, ...right];
}



function mergeSort(arr) {
  const bisection = arr.length / 2;

  if(arr.length < 2){
    return arr;
  }
  const left = arr.splice(0, bisection);
  return merge(mergeSort(left), mergeSort(arr));
}


let arr = [8,4,23,42,16,15];
console.log(mergeSort(arr));
