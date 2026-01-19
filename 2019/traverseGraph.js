let traverseGraph = (root) => {
    let allValues = [];
    let queue = [];
    if (!root) return allValues;
    let recurse = (node) => {
        if (!node) return;
        if (node.isVisited === true) {
            let poppedNode = queue.shift();
            recurse(poppedNode);
        } else {
            allValues.push(node.val);
            node.isVisited = true;
            for (let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
            if (queue.length > 0) {
                let poppedNode = queue.shift();
                console.log(poppedNode);
                recurse(poppedNode);
            }
        }
    }
    recurse(root);
    return allValues;
}


let GraphNode = function(val) {
    this.val = val;
    this.children = [];
}


let root = new GraphNode(0);
let node1 = new GraphNode(1);
let node2 = new GraphNode(2);
let node3 = new GraphNode(3);
let node4 = new GraphNode(4);
root.children = [node1];
node1.children = [node2, node4];
node2.children = [root, node1, node3];
node3.children = [node1];
node4.children = [root];

console.log(traverseGraph(root));