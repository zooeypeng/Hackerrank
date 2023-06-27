// Problem: Time Conversion
// https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const symbol = s.charAt(s.length-2)
    let militaryHour = ""
    const first = s.substring(0, 2)

    if (symbol === "A") { 
        militaryHour = (first === "12") ? "00" : first
    } else {
        const added = parseInt(first, 10) + 12
        militaryHour = (first === "12") ? first : added.toString()
    }
    
    return militaryHour + s.substring(2, s.length-2)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
