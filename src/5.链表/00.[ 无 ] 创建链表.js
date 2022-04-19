
 class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // 链表转化成数组
var createFromArray = function(array = []) {
    if (!array.length) return null
    const preHead = new ListNode(null);
    let  current = preHead 
    array.forEach(el=>{
        current.next = new ListNode(el);
        current = current.next;
    })
    return preHead.next;
}
// 查找链表中间值
const middle = (head) => {
    let [slow, fast] = [head, head];
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  // 将链表转化成数组
  const toArray=(head)=> {
    let arr =[]
    while (head) {
        arr.push(head.val)
        head = head.next;
    }
    return arr
  }
  // 两两交换
  const swap =(head)=>{
    const dummyHead =new ListNode(0)
    dummyHead.next =head
    let  temp = dummyHead;
    while (temp.next!==null&&temp.next.next!==null) {
        const node1 =temp.next
        const node2 =temp.next.next
        node1.next =node2.next
        node2.next =node1
        temp.next =node2
        temp = node1;
      // console.log(toArray(temp),'fggg');
    }
    return dummyHead.next
  }
  //测试是否为环
  const cycle = (head) => {
    // head.next.next.next=head
   let slow =head 
   let fast =head
    while (slow!=null&&fast.next!=null&&fast.next.next!=null) {
       slow=slow.next
       fast=fast.next.next
       if (slow===fast) {
         return true
       }
    }
    return false

  };
  // 删除倒数第几项
  const removeNthFromEnd=(head,n)=>{
    let [slow, fast] = [head, head];
    let i = 0;
    while (fast && i < n) {
      fast = fast.next;
      i += 1;
    }
    if (!fast) return head;
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  
    slow.next = slow.next.next;
  
    return head;
  }
  //  // 删除正数第几项
  // const removeNthFromStart=(head,n)=>{
   
  // }
  const reverse =(head)=>{
    if (!head) return  null
    let [curr,prev] =[head,null]
    while (curr) {
      const next =curr.next
      curr.next =prev
      prev =curr
      curr=next
    }
    return prev

  }
// 测试用例
let head = [1,2,3,4]
const list =createFromArray(head)
// console.log(list);
// const middleValue = middle(list);
// console.log(middleValue);
// const  arr = toArray(list);
// console.log(arr);
// const  swapValue =swap(list)
// console.log(toArray(swapValue));
// const  cycleValue =cycle(list)
// console.log(cycleValue);
// const removeValue =removeNthFromEnd(list,3)
// console.log((removeValue)); //[1,2,4,5]
// const removeValue =removeNthFromStart(list,1)
// console.log(toArray(removeValue)); //[1,3,4,5]

const reverseValue =reverse(list)
console.log(toArray(reverseValue));



