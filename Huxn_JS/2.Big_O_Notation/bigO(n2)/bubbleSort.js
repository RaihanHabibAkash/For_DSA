// bigO(n^2) Quadratic time complexity => Runtime grows proportionally to 
// the square of the input size. outer loop * inner loop => n * n = n^2.


/*
Bubble Sort => Bubble Sort repeatedly compares adjacent elements and 
swaps them if they are in wrong order. Bigger elements bubble up to the end.
*/
/*
ex: [5, 3, 8, 2, 4] => compare 5-3 swap. 5-8 no swap. 8-2 swap. 8-4 swap. 
largest value is set at the end of the array. Outer loop will runs again.
this time it will ignoore the last element by the inner loop j < n - i - 1.
The inner loop checks the the j number of element and the j + 1 element and swap it.
untile the the last index is set. Outer loop will run until the all elements are set.
Outer loop is only for the number pass and Inner loop is for to swap the values.
*/ 

const bubbleSort = (arr) => {
    let newArr = [...arr];

    const n = newArr.length;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if(newArr[j] > newArr[j + 1]) {
                [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
            }
        }
    }
    return newArr;
}

console.log(bubbleSort([5, 3, 8, 2, 4]));