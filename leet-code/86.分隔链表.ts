/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  let current = head;
  // 大于标识位的前一个节点

  if (!head || !head?.next) {
    return head;
  }
  if (!head.next.next && head.val >= x && head.next.val < x) {
    const temp = head.val;
    head.val = head.next.val;
    head.next.val = temp;
    return head;
  }

  let prevMaxNode: ListNode;
  let maxNode: ListNode;
  while (current?.next) {
    if (!maxNode && current.val >= x) {
      maxNode = current;
    } else if (!prevMaxNode && !maxNode && current.next.val >= x) {
      prevMaxNode = current;
      maxNode = current.next;
    }
    if ((prevMaxNode || maxNode) && current.next.val < x) {
      const val = current.next?.val;
      const nextPoint = current.next?.next;
      current.next = nextPoint;
      const target = { val: val, next: maxNode };

      if (prevMaxNode) {
        prevMaxNode.next = target;
        prevMaxNode = target;
      } else {
        head = target;
        prevMaxNode = target;
      }
    } else {
      current = current?.next;
    }
  }
  return head;
}
const head2 = {
  val: 3,
  next: {
    val: 3,
    next: { val: 4, next: { val: 2, next: { val: 4, next: { val: 0, next: { val: 3, next: null } } } } },
  },
};
console.log(JSON.stringify(partition(head2, 1)));
// @lc code=end
