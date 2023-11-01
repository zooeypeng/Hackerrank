// hackerrank.com/challenges/three-month-preparation-kit-strings-xor

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    const lines = input.split('\n');
    const a = lines[0].trim();
    const b = lines[1].trim();

    let result = "";
    
    for (let i = 0; i < a.length; i++) {
        result += (parseInt(a[i], 2) ^ parseInt(b[i], 2)).toString(2);
    }
    
    console.log(result);
});
