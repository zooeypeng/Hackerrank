'use strict';

const fs = require('fs');

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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    if (s.length % 2 !== 0) {
        return -1;
    }

    const midIndex = s.length / 2;
    const firstPart = s.slice(0, midIndex);
    const secondPart = s.slice(midIndex);

    const count1 = countCharacters(firstPart);
    const count2 = countCharacters(secondPart);

    let changes = 0;
    for (const char in count1) {
        changes += Math.max(0, count1[char] - (count2[char] || 0));
    }

    return changes;
}

function countCharacters(str) {
  const count = {};
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}
