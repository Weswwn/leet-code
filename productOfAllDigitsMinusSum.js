var product = (num) => {
    let sum = 0;
    let product = 1;
    while(num) {
        let lastDigit = num % 10;
        num = Math.floor(num/10);
        sum +=lastDigit;
        product *= lastDigit;
    }
    return product - sum;
}

console.log(product(0));