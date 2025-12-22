const constantTime = (arr) => {
    return arr[2];
}

console.log(constantTime([1, 4, 5, 2]));

// If the operation does not grow with input size, it’s O(1). 
// it's also called constant time.