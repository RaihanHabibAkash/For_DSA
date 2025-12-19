const binarySearch = (arr, target) => {
    let sortedArray = arr;

    let leftSide = 0;
    let  rightSide = sortedArray.length - 1;
    
    while(leftSide <= rightSide) {
        let mid = Math.floor((leftSide + rightSide) / 2);
        if(sortedArray[mid] === target){
            return sortedArray[mid];
        } else if(sortedArray[mid] < target) {
            leftSide = mid + 1;
        } else {
            rightSide = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([20, 40, 70, 10, 50, 80, 90, 100], 90));