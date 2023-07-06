/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number;
  next: ListNode;
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let current = head;
  while (current?.next) {
    const tempValue = current.val;
    current.val = current.next?.val;
    current.next.val = tempValue;
    current = current.next?.next;
  }
  return head;
}

const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };

console.log(swapPairs(head));
// @lc code=end
