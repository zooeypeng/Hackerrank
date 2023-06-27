// Problem: Find the Median

/*
* Complete the 'findMedian' function below.
*
* The function is expected to return an INTEGER.
* The function accepts INTEGER_ARRAY arr as parameter.
*/
function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b)
  const mid = arr.length / 2 - 1
  return arr[mid.toFixed(0)]
 }