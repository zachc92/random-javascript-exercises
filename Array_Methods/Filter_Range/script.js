function filtered(arr, a, b) {
    let newArr = [];
    for(item of arr){
        if(item > a && item < b){
            newArr.push(item);
        }
    }
    return newArr;
}

let array = [2,4,6,8,10];
let filteredArr = filtered(array, 3, 9);

console.log(filteredArr);