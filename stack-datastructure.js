//Stack : Stack data structure is similar to a array.It uses Last in First Out(LIFO) methodology

//Implement Stack data structure in javascript

//Stack has following Methods to Implement

// push() add new item into stack.
// pop() remove item from stack.
// peak() return top element of the stack.
// isEmpty check stack is empty or not.
// clear() remove all element from stack .
// size() return numberof Items is present into stack.

class Stack {
  constructor() {
    this.items = [];
  }

  // add item into stack
  addItem(item) {
    this.items.push(item);
    console.log("add item into stack", item);
  }

  // remove item from stack
  removeItem() {
    const rItem = this.items.pop();
    console.log("removed Item from stack", rItem);
  }

  // get top element of Stack
  peekItem() {
    const peekElement = this.items[this.items.length - 1];
    console.log("top element of stack", peekElement);
  }

  // check stack is empty or not
  isEmpty() {
    if (this.items.length) {
      console.log(false);
    } else {
      console.log(true);
    }
  }

  // clear stack
  clear() {
    this.items = [];
    console.log(this.items);
  }

  // check stack size
  size() {
    console.log(this.items.length);
  }
}

const st1 = new Stack();

st1.addItem(1);
st1.addItem(2);
st1.addItem(3);
st1.removeItem();
st1.peekItem();
st1.isEmpty();
st1.size();
