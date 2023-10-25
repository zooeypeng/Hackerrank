// https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits

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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    // 有一個32位元的二進位數字。我們想要將這個數字中的0和1互換，也就是0變成1，1變成0。

    // 為了實現這個效果，我們使用了一個特殊的數字，即2的32次方減去1（Math.pow(2, 32) - 1）。這個數字在二進位中的所有位元都是1。
    
    // 接著，我們將這個全是1的數字減去原來的32位元數字。這實際上就是在進行二進位補數運算，將原來數字的0和1互換。
    
    // 最終，我們得到的結果是原來數字的二進位中的0和1互換後的數字。
    
    const maxValue = Math.pow(2, 32) - 1;
    return maxValue - n;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
