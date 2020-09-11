export default class Deque {
  constructor() {
    this.count = 0;
    this.front = 0;
    this.items = {};
  }

  addFront(element) {
    if(this.isEmpty()) {
      this.addBack(element);
    } else if(this.front > 0) {
      this.front--;
      this.items[this.front];
    } else {
      for(let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.front = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if(this.isEmpty()) {
      return undefined;
    }
    const element = this.items[this.front];
    delete this.items[this.front];
    this.front++;

    return element;
  }

  removeBack() {
    if(this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const element = this.items[this.count];
    delete this.items[this.count];

    return element;
  }

  peekFront() {
    return this.items[this.front];
  }

  peekBack() {
    return this.items[this.count -1];
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
    return this.count - this.front == 0;
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