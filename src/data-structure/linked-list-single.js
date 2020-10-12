class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.head = undefined
    this.tail = undefined
    this.count = 0
  }

  push(element) {
    const node = new Node(element)
    if (this.head === undefined) {
      this.head = node
    } else if (this.tail === undefined) {
      this.head.next = node
      this.tail = node
    } else {
      let current = this.tail
      current.next = node
      this.tail = node
    }

    this.count++
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)

      if (index === 0) {
        node.next = this.head
        this.head = node
      } else if (index === this.count) {
        this.tail.next = node
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }

      this.count++
      return true
    }

    return false
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index == 0) {
        this.head = this.head.next
      } else {
        let previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.data
    }
    return undefined
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (current.data == element) {
        return i
      }
      current = current.next
    }
    return -1
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  isEmpty() {
    return this.count == 0
  }

  size() {
    return this.count
  }

  toString() {
    if (this.count === 0) {
      return ''
    }

    let objString = `${this.head.data}`

    let current = this.head.next
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${current.data}`
      current = current.next
    }

    return objString
  }
}

/* 
An advantage of Linked Lists
- Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
- This is one advantage it has over arrays.

Disadvantages of Linked Lists
- Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. 
Nodes are accessed sequentially starting from the first node.
- It uses more memory than arrays because of the storage of the pointers.
*/
