if (!root) return []; // Sanity check    
var result = [], level = [], s1 = [root], s2 = [], flag = true;

while (s1.length > 0) {
    var node = s1.pop(), left = node.left, right = node.right;

    // Handle the current node
    level.push(node.val);

    // Get ready for the next level
    // the key of zigzag traversal is to control the order of pushing
    // left and right sub children
    if (flag) {
        if (left)  s2.push(left);
        if (right) s2.push(right);
    } else {
        if (right) s2.push(right);
        if (left)  s2.push(left);
    }
    
    // We just finish traversing the current level
    if (s1.length === 0) {
        result.push(level);
        level = [];
        flag = !flag;
        // Continue to traverse the next level
        s1 = s2;
        s2 = [];
    }
}

return result;