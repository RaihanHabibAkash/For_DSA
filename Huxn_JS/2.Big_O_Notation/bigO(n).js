const grow = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push([i, arr[i]])
    }
    return newArr;
}
console.log(grow([1,4,5,8]));

// O(n) => Linear time. 
// Time grows directly with input size.