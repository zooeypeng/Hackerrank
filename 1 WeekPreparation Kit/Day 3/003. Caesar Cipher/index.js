// Problem: Caesar Cipher
// https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1

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
    const n = s.length
    let msg = ""
    
    for (let i = 0; i < n; i++) {
        const code = s.charCodeAt(i)
        
        // uppercase
        if (code >= 65 && code <= 90) {
            const transedCode = ((code -  65 + k) % 26 ) + 65
            msg += String.fromCharCode(transedCode)
        }
        
        // lowercase
        else if (code >= 97 && code <= 122) {
            const transedCode = ((code -  97 + k) % 26 ) + 97
            msg += String.fromCharCode(transedCode)
        }
        
        else {
            msg += s[i]
        }
        
    }
    
    return msg
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
