// https://www.hackerrank.com/challenges/three-month-preparation-kit-caesar-cipher-1

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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    let result = '';
    
    s.split('')
        .map(char => {
            if (char.match(/[A-Za-z]/)) {
                const code = char.charCodeAt(0);
                const isUpperCase = char === char.toUpperCase();
                const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                
                result += String.fromCharCode((code - base + k) % 26 + base);
            } else {
                result += char;
            }
        })
        
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
