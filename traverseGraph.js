let traverseGraph = (root) => {
    let allValues = [];
    if (!root) return allValues;
    let recurse = (node) => {
        if (!node) return allValues;
        if (node.isVisited === true) return;
        allValues.push(node.val);
        node.isVisited = true;
        for (let i = 0; i < node.children.length; i++) {
            recurse(node.children[i]);
        }
    }
    recurse(root);
    return allValues;
}


let GraphNode = function(val) {
    this.val = val;
    this.children = [];
}

let root = new GraphNode(1);
let node1 = new GraphNode(2);
let node2 = new GraphNode(3);
root.children = [node1];
node1.children = [node1, node2];
node2.children = [node1];

console.log(findRoute(root, node1, node2));