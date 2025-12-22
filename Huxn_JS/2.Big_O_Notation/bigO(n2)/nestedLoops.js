const nestedLoop = (arr) => {
    for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      console.log(arr[i], arr[j]);
    }
  }
}

console.log(nestedLoop([1, 4, 5, 8]));