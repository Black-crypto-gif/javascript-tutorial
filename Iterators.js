class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  *inorderTraversal() {
    function* traverse(node) {
      if (node) {
        yield* traverse(node.left);
        yield node.value;
        yield* traverse(node.right);
      }
    }

    yield* traverse(this.root);
  }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(2);
tree.add(4);
tree.add(6);
tree.add(8);

for (const value of tree.inorderTraversal()) {
  console.log(value);
}
/*
This example defines a Node class to represent nodes in a binary search tree, and a BinaryTree class to represent the tree itself. The BinaryTree class has an add method to add values to the tree, and an inorderTraversal method that returns an iterator that performs an in-order traversal of the tree (i.e., visits each node in ascending order of value).

The inorderTraversal method uses a generator function that recursively traverses the left subtree, yields the current node's value, and recursively traverses the right subtree. The yield* keyword is used to delegate the traversal of the left and right subtrees to the same generator function.

Finally, the example creates a BinaryTree instance and adds some values to it, and then uses a for...of loop to iterate over the values in the tree in order using the inorderTraversal iterator.
*/
