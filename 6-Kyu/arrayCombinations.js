/**
 * Array Combinations
 * https://www.codewars.com/kata/59e66e48fc3c499ec5000103
 * 
    In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

    For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

    Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

    See test cases for more examples.

    Good luck!
 */

// brute force
function solve(arr) {
  let ans = 1
  let helperObj = {}
  console.log("arr", arr)

  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].filter((x, index) => arr[i].indexOf(x) == index).length)
    ans *= arr[i].filter((x, index) => arr[i].indexOf(x) === index).length
    
  }
  return ans
};

// Refactor
function solve(arr) {
  return arr.map(subArray => subArray.filter((e, i) => subArray.indexOf(e) === i).length)
            .reduce((a, c) => a * c, 1)
};

// Alternate Solutions
function solve(arr) {
  return arr.reduce((a, c) => a *= new Set(c).size, 1)
};

function solve(arr) {
  return arr.map(x => new Set(x).size).reduce((a, c) => a * c, 1)
};


/**
  P-arameters
    given array of arrays

  R-eturn
    number -> number of combinations that can be made from the unique numbers in the array

  E-xamples
    [[1,2],[4],[5,6]]                       -> 4
    [[1,2],[4,4],[5,6,6]]                   -> 4
    [[1,2],[3,4],[5,6]]                     -> 8
    [[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]   -> 72
    
  P-seudocode
    - correlation between the # of unique numbers
      for each inner array # unique numbers for every inner array multiplied = total combinations
    - iterate throug the array
    - identify unique numbers
    - multiply the # of unique numbers together
    
    // brute force
    - placeholder ans variabe initialized to 1
    - for loop to iterate through the array
    - use filter() on inner array
    - *= .length of every inner array
    - return ans
    
    // refactored
    - use map to iterate through the array and transform to # unique numbers
        use filter to identify unique numbers (indexOf == lastIndexOf)
        .length to transform element into # or unique nums
    - use reduce to multiple all of the array elements together
      
*/