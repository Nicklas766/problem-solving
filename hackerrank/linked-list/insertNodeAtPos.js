const createNode = (data, next) => ({ data, next });

function insertNodeAtPosition(head, data, position) {
    let index = 0, current = head;

    while (index < position) {
        index++;
        
        if (index === position) {
            current.next = createNode(data, current.next)
        }

        current = current.next;
    }

    return head;
}