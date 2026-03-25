// quadratic equation x2 - 2x - A = 0

function solveQuadraticEquation(A) {
  if (A < -1) {
    console.log("No solution");
    return;
  }
  const discriminant = 4 + 4 * A;
  const x1 = (2 + Math.sqrt(discriminant)) / 2;
  const x2 = (2 - Math.sqrt(discriminant)) / 2;
  console.log(`Solutions: x1 = ${x1}, x2 = ${x2}`);
}

solveQuadraticEquation(-1);
