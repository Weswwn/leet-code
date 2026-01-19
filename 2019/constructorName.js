var name = (a,b) => {
    let obj1 = {};
    let obj2 = {};
    if (obj1.length !== obj2.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        //obj1[a[i]] = obj1[a[i]] + 1 || 1;

        if (obj1[a[i]]) {
            obj1[a[i]]++;
        } else {
            obj1[a[i]] = 1;
        }
        if (obj2[b[i]]) {
            obj2[b[i]]++;
        } else {
            obj2[b[i]] = 1;
        }
    }
    for (let key in obj2) {
        if (!obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(name('babczzz', 'abbzccc'));