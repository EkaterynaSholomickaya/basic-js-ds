const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  // constructor() {
  //   this.root = null;
  // }

  root() {
    if (this.data === undefined || this.data === null) return null;
    else return this.root;
    //return this.root;
  }

  add(data) {
    this.root = addNode(this.root, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.root, data);

    function hasNode(node, data) {
      {
        if (!node) return false;
        if (node.data === data) return true;
        return data < node.data
          ? hasNode(node.left, data)
          : hasNode(node.right, data);

        // if (val > node.val) return hasNode(node.right, val);
        // else return hasNode(node.left, val);
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null; // если нет потомков
        // если один потомок
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        //если два потомка есть
        let min = node.right;
        while (min.left) {
          min = min.left; //нашли наименьший  в правом поддереве
        }
        node.data = min.data;

        node.right = removeNode(node.right, min.data);

        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.root) return;

    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) return;
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    console.log();
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
