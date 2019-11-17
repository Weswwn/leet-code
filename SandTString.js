/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    let obj = {};
    for (let i = 0; i < S.length; i++) {
        obj[S[i]] = i;
    }
    
    let newString = '';
    for (let y = 0; y < T.length; y++) {
        if (obj[T[y]]) {
            console.log(T[y]);
            newString += obj[T[y]];
        } else {
            newString += T[y];
        }
    }
    console.log(newString);
};
console.log(customSortString('a', 'a'));