/**
 * Inserting a Node Into a Sorted Doubly Linked List
 */

const createNode = (data, prev, next) => ({ data, prev, next });

function sortedInsert(head, data) {

    let current = head;

    if (current.data > data) {
        return createNode(data, null, current)
    }

    while (current.next !== null) {
        
        if (current.data <= data && current.next.data >= data) {
            current.next = createNode(data, current, current.next);
            return head;
        } 

        if (current.next.next === null) {
            current.next.next = createNode(data, current.next, null);
            return head;
        }
       
        current = current.next;
    }
    return head;
}