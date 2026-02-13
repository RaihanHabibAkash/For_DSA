class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertAtEnd(val) {
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

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(40);
list.print();