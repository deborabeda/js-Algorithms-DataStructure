import Queue from '../../../src/data-structure/queue';

describe('Queue', () => {
  it('should queue to be empty when initialized', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.size()).toEqual(0);
  });

  it('should size to be 1 when an element is queued in an empty list', () => {
    const queue = new Queue();

    queue.enqueue('first');

    expect(queue.size()).toEqual(1);
  });

  it('should return undefined when dequeue from an empty queue', () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBeUndefined();
  });

  it('should dequeue the first element pushed to the queue', () => {
    const queue = new Queue();

    queue.enqueue('first');
    queue.enqueue('second');

    expect(queue.dequeue()).toEqual('first');
  });

  it('should peek the first element from the queue', () => {
    const queue = new Queue();

    queue.enqueue('first');

    expect(queue.peek()).toEqual('first');
    expect(queue.size()).toEqual(1);
  });

  it('should return undefined when peek from an empty queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeUndefined();
    expect(queue.size()).toEqual(0);
  });

  it('should reset the queue when use clear', () => {
    const queue = new Queue();

    queue.enqueue('first');
    queue.enqueue('second');

    expect(queue.size()).toEqual(2);
    queue.clear();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should return an empty string from an empty queue', () => {
    const queue = new Queue();

    expect(queue.toString()).toEqual('');
  });

  it('should return all elements from the queue as string', () => {
    const queue = new Queue();

    queue.enqueue('first');
    queue.enqueue('second');

    expect(queue.toString()).toEqual('first,second');
  });
});