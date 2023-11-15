// https://www.hackerrank.com/challenges/three-month-preparation-kit-smart-number

function isSmartNumber(num) {
  let sqrt = Math.sqrt(num);
  
  return (sqrt % 1 === 0) ? 'YES' : 'NO'
}

function processData(input) {
  //Enter your code here
  const arr = input.split('\n').slice(1).map(Number);
  
  for (const num of arr) {
      let result = isSmartNumber(num);
      console.log(result);
  }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
