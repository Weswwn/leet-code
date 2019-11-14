/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (!s) return;
    helper(0, s.length - 1, s);
};

let helper = (L, R, string) => {
    if (L >= R) {
        return;
    };
    
    let temp = string[L];
    string[L] = string[R];
    string[R] = temp;
    helper(L + 1, R - 1, string);
}

console.log(reverseString('hello'));