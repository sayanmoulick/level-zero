function createNode(value) {
  return {
    value: value,
    next: null,
  };
}
// or
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    this.length++;
    let node = createNode(value); // or use new Node(value);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      return node;
    }

    this.head = this.tail = node;
    return node;
  }

  insertHead(value) {
    this.length++;
    let node = createNode(value);

    if (this.head) {
      node.next = this.head;
      this.head = node;
      return node;
    }

    this.head = this.tail = node;
    return node;
  }

  removeHead() {
    if (this.head) {
      this.length--;
      const removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }
    return undefined;
  }

  remove() {
    if (this.tail) {
      this.length--;

      const tailNode = this.tail;

      // search for the node before tail
      let currentNode = this.head;

      while (currentNode.next != tailNode) {
        currentNode = currentNode.next;
      }
      const beforeTail = currentNode;
      this.tail = beforeTail;
      this.tail.next = null;

      return tailNode;
    }
    return undefined;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Bonus functions
  // insert at specific index

  insertIndex(value, index) {
    if (index >= this.length) {
      throw new Error("Insert index out of bounds");
    }

    if (index === 0) {
      return this.insertHead(value);
    }
    
    this.length++;
    let previousNode = null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    const newNode = createNode(value);
    newNode.next = currentNode;
    previousNode.next = newNode;
    return newNode;
  }

  // remove at specific index

  removeIndex(index) {
    if (index >= this.length) {
      throw new Error("Remove index out of bounds");
    }

    if (index === 0) {
      return this.removeHead();
    }

    this.length--;
    let previousNode = null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
    return currentNode;
  }
    
    getHead () {
        return this.head;
    }
}

// Testing functions

const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(4);
linkedList.insertHead(9);
linkedList.insertHead(10);
linkedList.insert(3);
linkedList.insert(5);
linkedList.insert(2);
// linkedList.removeIndex(2);
console.log(linkedList.length); // 3
linkedList.print(); // 10 9 8 

// console.log(linkedList.getHead());

function partition (ll, x) {
    let smallList = new createNode(0);
    let bigList = new createNode(0);

    let small = smallList;
    let big = bigList;

    let head = ll.getHead()
    while (head) {
      if (head.value < x) {
        small.next = head;
        small = small.next;
      } else {
        big.next = head;
        big = big.next;
      }
      head = head.next;
    }

    small.next = bigList.next;
    big.next = null;

    return smallList.next;
}

console.log(partition(linkedList, 6));

