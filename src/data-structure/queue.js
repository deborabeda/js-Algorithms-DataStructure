export default class Queue {
  constructor() {
    this.count = 0;
    this.front = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if(this.isEmpty()) {
      return undefined;
    }
    const element = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return element
  }

  peek() {
    if(this.isEmpty()) {
      return undefined;
    }

    return this.items[this.front];
  }

  toString() {
    if(this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[this.front]}`;
    for(let i = this.front + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }

  isEmpty() {
    return this.count - this.front === 0;
  }

  size() {
    return this.count - this.front;
  }

  clear() {
    this.count = 0;
    this.front = 0;
    this.items = {};
  }
}