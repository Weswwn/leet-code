function concatenationsSum(a) {
    a.sort((a,b) => {
        return a - b;
    })
    
    
    if (a.length === 1) {
        let singleNum = a[0].toString();
        singleNum += singleNum;
        return parseInt(singleNum);
    }
    let totalSum = 0;
    let recurse = (combinations) => { 
        if (combinations.length === 2) {
            combinations = combinations.join('');
            console.log(combinations);
            totalSum += parseInt(combinations);
            return;
        }
        for (let i = 0; i < a.length; i++) {
            recurse(combinations.concat([a[i]]));
        }
    }
    recurse([]);
    return totalSum;
}
