// Assignemt 1 Palindrome

function palindrome(n) {
    let rem = n%10
    let quotient = Math.floor(n/10)
    while (quotient > 0) {
        rem = rem*10 + quotient%10;
        quotient = Math.floor(quotient/10);
    }
    return rem === n
}

console.log(palindrome(121221)) // false
console.log(palindrome(1221)) // true

console.log(palindrome(121)) // true
console.log(palindrome(454)) // true

console.log(palindrome(345)) // false
console.log(palindrome(5898)) // false


// --------------------------------------------------

// Assignemt 2 - Prime Number

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i=2; i<Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(2)) // true
console.log(isPrime(3)) // true
console.log(isPrime(11)) // true
console.log(isPrime(15)) // false
console.log(isPrime(1000003)) // true
console.log(isPrime(9999991)) // false