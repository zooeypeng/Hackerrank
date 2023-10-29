// Flipping Matrix

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */
function flippingMatrix(matrix) {
  // Write your code here
  const n = matrix.length / 2;
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const a = matrix[i][j];
      const b = matrix[2 * n - i - 1][j];
      const c = matrix[i][2 * n - j - 1];
      const d = matrix[2 * n - i - 1][2 * n - j - 1];

      totalSum += Math.max(a, b, c, d);
    }
  }

  return totalSum;
}