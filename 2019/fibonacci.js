function fibonacci(num) {
    if (num > 2) {
        return fibonacci(num - 2) + fibonacci(num - 1);
    } else {
        return 1;
    }
}

console.log(fibonacci(6));