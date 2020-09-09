import Stack from '../../../src/data-structure/stack';

describe('Stack', () => {
  it('should stack to be empty when initialized', () => {
    const stack = new Stack();

    expect(stack.isEmpty).toBeTruthy();
    expect(stack.size()).toEqual(0);
  });

  it('should size to be 1 when push an element in an empty list', () => {
    const stack = new Stack();

    stack.push('first');

    expect(stack.size()).toEqual(1);
  });

  it('should pop the last element pushed to the stack', () => {
    const stack = new Stack();

    const element = 'first'
    stack.push(element);

    expect(stack.pop()).toEqual(element);
  });

  it('should return undefined when pop from an empty stack', () => {
    const stack = new Stack();

    expect(stack.pop()).toBeUndefined();
  });

  it('should peek the last element pushed to the stack', () => {
    const stack = new Stack();

    const element = 'first'
    stack.push(element);

    expect(stack.peek()).toEqual(element);
    expect(stack.size()).toEqual(1);
  });

  it('should return undefinet when peek from an empty stack', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeUndefined();
    expect(stack.size()).toEqual(0);
  });

  it('should reset the stack when use clear', () => {
    const stack = new Stack();

    stack.push('first');
    stack.push('second');

    expect(stack.size()).toEqual(2);
    stack.clear();
    expect(stack.isEmpty).toBeTruthy();
  });

  it('should return all elements from the stack as string', () => {
    const stack = new Stack();

    stack.push('first');
    stack.push('second');

    expect(stack.toString()).toEqual('first,second');
  });

  it('should return an empty string from an empty stack', () => {
    const stack = new Stack();

    expect(stack.toString()).toEqual('');
  });
});