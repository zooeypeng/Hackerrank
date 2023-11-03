// https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let birdCount = {};
    
    for (const bird of arr) {
        birdCount[bird] = (birdCount[bird] || 0) + 1;
    }
    
    let mostCommonBird = Infinity;
    let maxCount = 0;
    
    for (const bird in birdCount) {
        const count = birdCount[bird];

        if (count > maxCount || (count === maxCount && bird < mostCommonBird)) {
            maxCount = count;
            mostCommonBird = bird;
        }
    }
    
    return mostCommonBird;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
