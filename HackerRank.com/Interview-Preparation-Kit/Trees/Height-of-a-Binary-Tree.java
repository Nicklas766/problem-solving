/** 
 * Tree: Height of a Binary Tree
 */
public static int height(Node node) {
    
  if (node == null) {
      return -1;
  }
  int leftDepth = height(node.left);
  int rightDepth = height(node.right);

  return 1 + (leftDepth > rightDepth ? leftDepth: rightDepth);
}