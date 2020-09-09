import Stack from '../data-structure/stack';

export function decimalToBinary(decimal) {
  if(decimal === 0) {
    return '0';
  }

  const stack = new Stack();
  let binaryString = '';

  let number = decimal;
  while(number > 0) {
    const remainder = Math.floor(number % 2);
    stack.push(remainder);
    number = Math.floor(number / 2);
  }

  while(!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}