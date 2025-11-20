const array = ["Raiha", "Habib", "Akash", "Ash", "RH"];
let ans = "";

const findValue = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            ans = arr[i];
            console.log(`Value ${ans} found in index ${i}`);
        }
    }
    if(ans === ""){
        console.log("Value not found");
    }
}

findValue(array, "Akash");


// Create a function that will take 2 arguments.
// first one will take a array and second one will take a target. 
// Now create the function to find the matched value from the target from array.