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

    inserAtEnd (val) {
        const newNode = new Node(val);

        if(this.head !== null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    print() {
        let current = this.head;
        let result = "";

        while (current !== null) {
        result += current.data + " -> ";
        current = current.next;
        }

        result += "null";
        console.log(result);
    }
}

const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.append(40);
list.append(50);
list.print();