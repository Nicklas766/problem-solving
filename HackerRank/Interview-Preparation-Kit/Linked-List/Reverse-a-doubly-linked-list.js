/**
 * Reverse a doubly linked list
 */

function reverse(head) {
    let temp = head, newHead = head;

    while (temp != null) {
        let prev = temp.prev;

        temp.prev = temp.next;
        temp.next = prev;

        newHead = temp;
        temp = temp.prev;
    }

    return newHead;
}