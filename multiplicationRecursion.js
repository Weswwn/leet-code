let multiRecursion = (a,b) => {
    if (a === 0) {
        return 0;
    }
    return multiRecursion(a - 1, b) + b;
}
console.log(multiRecursion(7,5))