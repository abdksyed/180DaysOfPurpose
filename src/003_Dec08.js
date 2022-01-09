// Assignmet 1 - Fibonacci

function fib(n){
    fib_list = [0,1];
    if (n < 2) return fib_list;
    while (true){
        size = fib_list.length;
        n3 = fib_list[size-1] + fib_list[size-2];
        if (n3 > n) break;
        fib_list.push(n3);
    }
    return fib_list
}

console.log(fib(101))

// Assignmet 2 - Prime Numbers

function primeNumber(n1,n2) {
    prime_list = [];
    isPrime = true
    for (let i = n1; i<=n2; i++){
        for (let j=2; j<=Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) prime_list.push(i)
        isPrime = true 
    }
    return prime_list
}

console.log(primeNumber(100,500))