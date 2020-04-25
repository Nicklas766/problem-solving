/**
 * Binary Search Tree : Lowest Common Ancestor
 */

public static Node lca(Node root, int v1, int v2) {
    // if bigger than both
      if (root.data > v1 && root.data > v2) {
        return lca(root.left, v1, v2);
    }

    // if smaller than both
    if (root.data < v1 && root.data < v2) {
        return lca(root.right, v1, v2);
    }

    // found
    return root;
}