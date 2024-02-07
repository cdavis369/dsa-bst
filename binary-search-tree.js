class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let node = this.root;

    while (true) {
      if (val <  node.val) {
        if (node.left === null) {
          node.left = new Node(val)
          return this;
        }
        node = node.left;
      } else {
        if (node.right === null) {
          node.right = new Node(val);
          return this;
        }
        node = node.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    function insertHelper(currentNode, newVal) {
      if (currentNode === null) {
        return new Node(newVal);
      }

      if (newVal < currentNode.val) {
        currentNode.left = insertHelper(currentNode.left, newVal);
      } else {
        currentNode.right = insertHelper(currentNode.right, newVal);
      }

      return currentNode;
    }

    insertHelper(node, val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;
    while (node) {
      if (node.val === val) return node;
      if (val < node.val) node = node.left;
      else node = node.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return undefined;
    if (val === node.val) return node;
    if (val < node.val) return this.findRecursively(val, node.left);
    if (val > node.val) return this.findRecursively(val, node.right);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
  const seen = [];

  function traverse(node) {
    if (node === null) return;
    seen.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(this.root);
  return seen;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const seen = [];

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      seen.push(node.val);
      traverse(node.right);
    }

    traverse(this.root);
    return seen;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const seen = [];

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      seen.push(node.val);
    }

    traverse(this.root);
    return seen;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const nodesChecked = [];
    const nodesToCheck = [];

    if (this.root) nodesToCheck.push(this.root);

    while (nodesToCheck.length > 0) {
      const node = nodesToCheck.shift();
      nodesChecked.push(node.val);
      if (node.left) nodesToCheck.push(node.left);
      if (node.right) nodesToCheck.push(node.right);
    }
    return nodesChecked;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
