var rotateRight = function (head, k) {
    let node = head, length = 0
    while (node.next) {
        length++
        node = node.next
    }
    let last = node
    k = k % (length + 1)
    node = head
    for (let i = 0; i < k; i++) {
        node = node.next
    }
    last.next = head
    head = node.next
    node.next = null
    return head
};