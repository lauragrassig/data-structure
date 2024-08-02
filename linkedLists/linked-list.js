const LinkedList = require('./index');

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromEnd();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const list = new LinkedListStack();

console.log(list.isEmpty())
list.push(10);
list.push(20);
list.print();


class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }


  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    return this.list.print();
  }
}

const listQueue = new LinkedListStack();

console.log(listQueue.isEmpty())
listQueue.push(10);
listQueue.push(20);
listQueue.print();