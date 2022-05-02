const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  // function remove(node) {
  //   if (node.next.next) node.next = node.next.next;

  // }
  // while (node.next) {
  //   if (node.next.val = k){
  //     node = node.next
  //    remove(node)

  // }

  if (l.value) findEl(l);

  function findEl(l) {
    if (l.value === k) removeEl(l);

    if (l.next === null) return l;
    else {
      if (l.next.value === k) remove(l);
      else findEl(l.next); //cледующий
    }
  }

  function removeEl(node) {
    //удалила первый попавшийся и опять проверяем
    node.value = node.next.value;
    node.next = node.next.next;
    findEl(l);
  }

  function remove(node) {
    //удаляем следующий элемнет и с этого момента начинаем поиск
    if (node.next.next) node.next = node.next.next;
    else node.next = null;
    findEl(node);
  }
  return l;
}

module.exports = {
  removeKFromList,
};
