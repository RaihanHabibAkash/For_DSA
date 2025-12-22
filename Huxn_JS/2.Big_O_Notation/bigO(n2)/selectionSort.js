/* 
bigO(n^2) Quadratic time complexity => Runtime grows proportionally to 
the square of the input size. outer loop * inner loop => n * n = n^2.
*/

/*
Selection Sort => Repeatedly findthe smallest element from the unsorted
part and place it at the beginning of the array.
*/

/*
ex: [5, 3, 8, 4] first set index to set the min value i. than find the
min value 3 and set it in the index of i or 0. Outer loop or i++ will
ignoore the first index in other outer loop. i + 1 to set compare min
value or default value arr[minIndex] with others arr[j]. it will run
untile the array is sort.
*/

const selectionSort = (arr) => {
    let newArr = [...arr];
    const n = newArr.length;

    for(let i = 0; i < n; i++) {
        let minIndex = i;

        for(let j = i + 1; j < n; j++) {
            if(newArr[ minIndex ] > newArr[ j ]) {
                minIndex = j;
            }
        }

        [ newArr[ i ], newArr[ minIndex ] ] = [ newArr[ minIndex ], newArr[ i ] ];
    }

    return newArr;
}

console.log(selectionSort([9, 4, 6, 2, 8]));