/**
 * 2.7 Intersection
 * 
 * 
 * Given two (singly) linked lists, determine if the two lists intersect. 
 * Return the  intersecting node. Note that the intersection is defined based on reference, not value. 
 * That is, if the kth node of the first linked list is the exact same node (by reference) as the
 * jth node of the second linked list, then they are intersecting. 
 * 
 */


function Node(value) {
    this.value = value;
    this.next = null;
}

// O(n^2)
function intersectionOrdoTwo(node1, node2) {
    let currNode1 = node1, currNode2 = node2;

    while (currNode2.next !== null) {

        while (currNode1.next !== null) {
            if (currNode1 === currNode2) {
                return currNode1;
            }
            currNode1 = currNode1.next;
        }
        currNode2 = currNode2.next;
        currNode1 = node1;
    }

    return false;
}


// O(n) with hash map
function intersection(node1, node2) {
    let hash = new Map();
    
    while (node1.next !== null) {
        hash.set(node1, 1);
        node1 = node1.next;
    }

    while (node2.next !== null) {
        if (hash.has(node2)) {
            return node2;
        }
        node2 = node2.next;
    }

    return null;
}


// list 1
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// list 2
const node11 = new Node(1);
const node22 = new Node(2);

node11.next = node22;
node22.next = node3;

// Intersection should occur on node3
console.log(intersection(node1, node11))