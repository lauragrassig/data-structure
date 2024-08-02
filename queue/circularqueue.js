class Queue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.currentLength++;
      this.items[this.rear] = element;

      if(this.front === -1) {
        this.front = this.rear;
      }
    }

    return 'Array Full'
  }

  dequeue() {
    if(this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    let i;
    let str = '';


    for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }

    str += this.items[i];
    console.log(str)
  }
}

const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.enqueue(5);
queue.dequeue();
queue.enqueue(2);

queue.print();
console.log(queue.peek());