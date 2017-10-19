/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let base = 0;
    let result = new ListNode(-1);
    const resHead = result;
    while(l1 !== null || l2 !== null){
        let sum = base;
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        if(sum >= 10){
            sum -= 10;
            base = 1;
        } else {
            base = 0;
        }
        const node = new ListNode(sum);
        result.next = node;
        result = result.next;
    }
    if(base === 1){
        result.next = new ListNode(1);
    }
    return resHead.next;
};