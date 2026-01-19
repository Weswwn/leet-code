var reverseString = function(s) {
    const helper = (index) => {
        let tempIndex = s.length - index - 1;
        let tempChar = s[tempIndex];
        if (index > tempIndex) {
            return s;
        }
        s[tempIndex] = s[index];
        s[index] = tempChar;
        index++;
        helper(index);
    }
    helper(0);
};