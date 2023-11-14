// https://www.hackerrank.com/challenges/three-month-preparation-kit-strong-password

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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const conditions = {
        numbers: /\d/,
        lowercase: /[a-z]/,
        uppercase: /[A-Z]/,
        specialChars: /[!@#$%^&*()\-+]/,
    };
    
    let satisfiedConditions = 0;
    for (const condition of Object.values(conditions)) {
        if (condition.test(password)) {
            satisfiedConditions++;
        }
    }
    
    const charsToAdd = Math.max(0, 4 - satisfiedConditions);
    
    const totalChars = Math.max(6, n + charsToAdd);
    
    return totalChars - n;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
