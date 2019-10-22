var isUnique = (string) => {
    // Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
    for (var i = 0; i < string.length; i++) {
        for (var y = i + 1; y < string.length; y++) {
            if (string[i] === string[y]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isUnique('smh'));

// The run time of this is n^2