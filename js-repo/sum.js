// add two numbers using recursion

// Check Whether a Number can be Expressed as Sum of Two Prime Numbers

// Sum of Natural Numbers Using Recursion
function addNumbers(n) {
    if (n != 0)
        return n + addNumbers(n - 1);
    else
        return n;
}