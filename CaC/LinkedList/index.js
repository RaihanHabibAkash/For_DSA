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

    append(val) {
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
list.reverse();
list.print();