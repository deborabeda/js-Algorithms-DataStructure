/* Time complexity: O(N) / Space complexity: Constant */

export function fibonacciPosition(n){
  let firstPosition = 0, secondPosition = 1, temp;

  while (n > 1){
    temp = secondPosition;
    secondPosition = firstPosition + secondPosition;
    firstPosition = temp;
    n--;
  }

  return firstPosition;
}