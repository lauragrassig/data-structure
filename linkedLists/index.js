class Node {
  constructor(value) {
    this.value = value;
    this.next = null;''
  }
}

class LinkedList {
  constructor() {
    this.head =  null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if(this.isEmpty()) {
      console.log('Its empty');
    } else {
      let curr = this.head;
      let listValues = '';

      while(curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValues)
    }
  }

  prepend(value) {
    const node = new Node(value);

    if(!this.isEmpty()) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      // let prev = this.head;

      // while(prev.next) {
      //   prev = prev.next;
      // }

      // prev.next = node;
      // this.tail = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.size) {
      this.append(value);
      return;
    }
    
    const node = new Node(value);

    this.size++;

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      let curr;
      let i = 0;

      while(i < index) {
        i += 1;
        curr = prev;
        prev = prev.next;
      }
      
      curr.next = node;
      node.next = prev;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return this.head;
    }

    let prev = this.head.next;
    let curr = this.head;
    let i = 1;
    let removedNode;

    while (i <= index) {
      if (index === i) {
        removedNode = curr.next;
        curr.next = prev.next;
        return removedNode.value;
      }

      i += 1;
      curr = prev;
      prev = prev.next;
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    return value;
  }



  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;

      while(prev.next !== this.tail) {
        prev = prev.next;
      }

      prev.next = null;
      this.tail = prev;
    }

    this.size--;
    return value;
  }

}

module.exports = LinkedList;