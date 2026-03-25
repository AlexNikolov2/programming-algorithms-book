//algoritm for equation (A2 - 1)x = B(B - 2)

function solveEquation(A, B) {
  if (A === 1 || A === -1) {
    console.log("No solution");
    return;
  }

  const x = (B * (B - 2)) / (A * A - 1);
  console.log(x);
}
solveEquation(1, 0);
