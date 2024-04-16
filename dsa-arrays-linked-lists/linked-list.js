/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    //checking if empty
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      //setting the null value at the end to the newNode value and setting that as
      //the new tail
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++    
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    //checking if empty
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      //referencing
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1)
  }

  /** shift(): return & remove first item. */

  shift() {
    //index is always 0 if at beginning
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0){
      throw new Error('Invalid Index')
    }
    return this.getNode(idx).val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0){
      throw new Error('Invalid Index')
    }
    let current = this.getNode(idx)
    current.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val){
    if(idx > this.length || idx < 0){
      throw new Error('Invalid Index')
    }
    //empty list so add to beginning
    if(idx === 0){
      return this.unshift(val)
    }
    //adding at the end
    if(idx === this.length){
      return this.push(val)
    }
    //adding in the middle
    let current = this.getNode(idx)
    let newNode = new Node(val)
    newNode.next = current.next
    current.next = newNode

    this.length++
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx >= this.length || idx < 0){
      throw new Error('Invalid Index')
    }

    let prev = this.getNode(idx-1)

    // removing last item
    if(idx === this.length -1){
      let val = prev.next.val
      prev.next = null
      this.tail = prev
      this.length--
      return val
    }

    //removing first item
    if(idx === 0){
      let val = this.head.val
      this.head = this.head.next
      this.length--
      if(this.length < 2) this.tail = this.head
      return val
    }
    
    //removing middle index
    let val = prev.next.val
    prev.next = prev.next.next
    this.length --
    return val
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0
    let current = this.head
    if(this.length === 0){
      return 0
    }
    while(current){
      total = total + current.val
      current = current.next
    }
    return total / this.length
  }


  getNode(idx){
    let current = this.head
    let count = 0

    while(current !== null && count != idx){
      count++
      current = current.next
    }
    return current
  }
}

module.exports = LinkedList;
