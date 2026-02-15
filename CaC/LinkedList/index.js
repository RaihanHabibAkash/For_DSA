class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        // Header pointer
        this.head = head;
    }

    append(val) {
        // Create new Node.
        const newNode = new Node(val);

        // If the linked list is empy set newNode to head.
        if(this.head === null){
            this.head = newNode;
            return;
        }

        // Set pointer current for traversing in the linked list.
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        // Set the current value next to new Node.
        current.next = newNode;
    }

    prepend(val) {
        const newNode = new Node(val);

        // Set this newNode next to the current head pointer.
        newNode.next = this.head;

        // Set the newNode to the new Head.
        this.head = newNode;
    }


    // Seraching and inseting at middle.
    insertAtMid(val, target) {
        const newNode = new Node(val);
        let current = this.head;

        while(current.next !== null) {
            if(current.data !== target) {
                current = current.next;
            } else {
                // new Node next will point the target node next.
                newNode.next = current.next;

                // New node will be the target Node next
                current.next = newNode;
                return;
            }
        }
    }

    delete(val) {
        let current = this.head;
        let prev = current;

        // If first element.
        if(current.data === val) {
            this.head = current.next;
        }

        while(current.next !== null) {
            if(current.data === val) {
                prev.next = current.next;
                return;
            } else {
                prev = current;
                current = current.next;
            }
        }
        // If last element.
        if(current.data === val) {
            prev.next = null;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next;

        while(current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }


    print(){
        let current = this.head;
        
        while(current.next !== null) {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
    }  

}

const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.append(40);
list.prepend(50);
list.insertAtMid(5, 50);
list.delete(40);
list.print();