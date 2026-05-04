function unique(arr){
    let newArr = [];
    for(i=0;i<arr.length;i++){
        if (newArr.findIndex(item => item == arr[i]) === -1){
            newArr.push(arr[i]);
            // this works because the if statement is effectively waiting for a report from .findIndex
            // .findIndex will not complete its report until all indexes in newArr have been compared
            // against arr[i].
            // .findIndex will not report -1 unless there are truly no matches
            // this prevents the second instance of "Krishna" (arr[3]) being pushed into newArr after 
            // seeing that "Krishna" does not equal "Hare". .findIndex moves on after seeing no 
            // match between arr[3] and newArr[0] and then finds the match in the second 
            // index of newArr (newArr[1])
        }
    }
    return newArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings));