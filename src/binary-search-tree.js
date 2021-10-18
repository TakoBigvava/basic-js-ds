const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

module.exports = class BinarySearchTree {
  constructor(data){
    this.top = null;
    this.data = data;
  }
 
  root() {
    return this.top;
  }

  add(data) {
   this.top = addTo(this.top, data);
    function addTo(node, data){
      if (!node) {
        return new Node(data);
      } 
        if (node.data === data){
        return node;
      }
      if(data < node.data){
        node.left = addTo(node.left, data);
      } else {
        node.right = addTo(node.right, data);
      }
      return node
    }
  }

  has(data) {
    return search(this.top, data);
    function search(node, data){
      if(!node){
        return false
      }
      if(node.data === data) {
        return true
      }
      if(node.data > data){
       return search(node.left, data)
      } else {
       return search(node.right, data)
      }
    }
  }

  find(data) {
    return findIn(this.top, data);
  function findIn(node, data){
      if(!node){
        return null
      }
      if(node.data === data) {
        return node
      }
      if(node.data > data){
       return findIn(node.left, data)
      } else {
       return findIn(node.right, data)
      }
    }
  }

  remove(data) {
    this.top = removeNode(this.top, data);
    function removeNode(node, data){
      if (!node) {
        return null;
      }
      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left){
          minRight = minRight.left
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return null;
    }
    let node = this.top;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return null;
    }
    let node = this.top;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }

}

