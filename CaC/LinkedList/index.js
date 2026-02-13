class Node {
    constructor(info, next = null) {
        this.info = info;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor(head) {
        this.head = head;
    }

    append (val) {
        const newNode = new Node(val);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    
}

const list = new SinglyLinkedList();