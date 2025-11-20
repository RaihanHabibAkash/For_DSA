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