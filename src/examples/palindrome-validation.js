import Deque from '../data-structure/deque';

export function palindromeValidation(text) {
  if(text === undefined || text === null || text.length === 0) {
    return false;
  }

  if(text.length === 1) {
    return true;
  }

  let isEqual = true;
  const deque = new Deque();
  const lowerText = text.toLocaleLowerCase();
  let firstChar, lastChar;

  for(let i = 0; i < lowerText.length; i++) {
    if(!'.,?!: '.includes(lowerText.charAt(i))) {
      deque.addBack(lowerText.charAt(i));
    }
  }

  while(deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if(firstChar != lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}