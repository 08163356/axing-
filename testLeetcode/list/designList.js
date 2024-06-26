class ListNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

var MyLinkedList = function() {
    this._size = 0;
    this._tail = null
    this._head = null
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size){ return -1 }
    let curr = new ListNode(0, this._head)
    while (index-- >0){
        curr = curr.next
    }
    return  curr.val
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new ListNode(val, this._head)
    this._head = node
    this._size++
    if(!this._tail){
        this._tail = node
    }

};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new ListNode(val, null)

    this._size++
    if(this._tail){
        this._tail.next = node
        this._tail = node
        return
    }
    this._tail = node
    this._head = node

};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this._size || index < 0){ return }
    if(index <= 0){ this.addAtHead(val) ; return;}
    if(index === this._size) { this.addAtTail(val); return;}
    let curr = new ListNode(0, this._head)
    index -= 1
    while (index-- >= 0){
            curr = curr.next
    }
    curr.next = new ListNode(val, (curr.next).next)
    this._size++

};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 ||index > this._size){ return }
    while (index-- >0){
        [].re
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */