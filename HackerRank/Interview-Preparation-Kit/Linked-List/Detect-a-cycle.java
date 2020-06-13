/**
 * Detect cycle in linked list
 */

// runner technique
boolean hasCycle(Node head) {    
    if (head == null) {
        return false;
    };
    
    Node slow = head;
    Node fast = head.next;
    
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}

// With HashTable
boolean hasCycle(Node head) {    
    HashSet<Node> visited = new HashSet();
    
    while(head != null){
        if(visited.contains(head)) {
            return true;
        }
        visited.add(head);
        head = head.next;
    }
    
   return false;
}