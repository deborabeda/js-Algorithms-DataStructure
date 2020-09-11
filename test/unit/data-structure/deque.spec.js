import Deque from '../../../src/data-structure/deque';

describe('Deque', () => {
  it('should deque to be empty when initialized', () => {
    const deque = new Deque();

    expect(deque.isEmpty()).toBeTruthy();
    expect(deque.size()).toEqual(0);
  });

  it('should size to be 1 when an element is add in front of an empty deque', () => {
    const deque = new Deque();

    deque.addFront('first');
    expect(deque.size()).toEqual(1);
  });

  it('should size to be 1 when an element is add in back of an empty deque', () => {
    const deque = new Deque();

    deque.addBack('first');
    expect(deque.size()).toEqual(1);
  });

  it('should return undefined when trying to remove the front or back from an empty deque', () => {
    const deque = new Deque();

    expect(deque.size()).toEqual(0);
    expect(deque.removeFront()).toBeUndefined();
    expect(deque.removeBack()).toBeUndefined();
  });

  it('should return the element set in the front of a deque', () => {
    const deque = new Deque();

    deque.addFront('front');
    deque.addBack('back');

    expect(deque.removeFront()).toEqual('front');
    expect(deque.size()).toEqual(1);
  });

  it('should return the element set in the back of a deque', () => {
    const deque = new Deque();

    deque.addFront('front');
    deque.addBack('back');

    expect(deque.removeBack()).toEqual('back');
    expect(deque.size()).toEqual(1);
  });

  it('should set two elements in the front of a deque and remove from front in order', () => {
    const deque = new Deque();

    deque.addFront('first');
    deque.addFront('second');

    expect(deque.removeFront()).toEqual('second');
    expect(deque.removeFront()).toEqual('first');
  });
  
  it('should set two elements in the front of a deque and remove from back in order', () => {
    const deque = new Deque();

    deque.addFront('first');
    deque.addFront('second');

    expect(deque.removeBack()).toEqual('first');
    expect(deque.removeBack()).toEqual('second');
  });

  it('should set two elements in the back of a deque and remove from back in order', () => {
    const deque = new Deque();

    deque.addBack('first');
    deque.addBack('second');

    expect(deque.removeBack()).toEqual('second');
    expect(deque.removeBack()).toEqual('first');
  });

  it('should set two elements in the back of an empty deque and remove from front in order', () => {
    const deque = new Deque();

    deque.addBack('first');
    deque.addBack('second');

    expect(deque.removeFront()).toEqual('first');
    expect(deque.removeFront()).toEqual('second');
  });

  it('should peek the element added in the front of a deque', () => {
    const deque = new Deque();

    deque.addFront('front');
    deque.addBack('back');
    expect(deque.peekFront()).toEqual('front');
  });

  it('should peek the element added in the back of a deque', () => {
    const deque = new Deque();

    deque.addFront('front');
    deque.addBack('back');
    expect(deque.peekBack()).toEqual('back');
  });

  it('should return the elements in the deque as string', () => {
    const deque = new Deque();

    deque.addFront('front');
    deque.addBack('back');
    expect(deque.toString()).toEqual('front,back');
  });
});