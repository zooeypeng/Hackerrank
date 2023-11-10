// https://www.hackerrank.com/challenges/three-month-preparation-kit-separate-the-numbers

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    // Write your code here

    let mid = Math.floor(s.length / 2);

        for (let i = 0; i < mid; i++) {
            let st = s.slice(0, i + 1);
            let temp = BigInt(st);
            let t = '';

            while (t.length < s.length) {
                t += temp;
                temp++;
            }

            if (s === t) {
                return console.log(`YES ${st}`);
            }
        }

        console.log('NO');

}


function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
