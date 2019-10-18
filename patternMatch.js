var patternMatch = (string, pattern) => {
    var obj = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    }
    let resultArray = [];
    var stringConverted = '';
    
    if (string.length < 1) {
        return resultArray;
    }
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]]) {
            stringConverted += '0';
        } else {
            stringConverted += '1';
        }
    }
    for (var i = 0; i < stringConverted.length; i++) {
        let resultString = '';
        if (stringConverted[i] === pattern[0]) {
            resultString += string[i];
        }
        let temp = i + 1;
        for (let z = 1; z < pattern.length; z++) {
            if (stringConverted[temp] === pattern[z]) {
                resultString += string[temp];
                temp++;
            } else {
                break;
            }
        }
        if (resultString.length === pattern.length) {
            resultArray.push(resultString);   
        }
    }
    return resultArray;
}

console.log(patternMatch('amazing', '011'))