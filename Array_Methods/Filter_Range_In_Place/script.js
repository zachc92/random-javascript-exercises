function filterRangeInPlace(arr, a, b){
    let index = 0;
    for(i=0; i<arr.length;i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            // lower the counter by 1 to account for the next value being 
            // pulled into the index we just removed a value from
            i--;
        }
    }
}

let arr = [5,3,8,1,2,9,2,2,9,9];
filterRangeInPlace(arr, 1, 4);
console.log(arr);