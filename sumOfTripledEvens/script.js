const arr = [1,2,3,4,5,6];
let sum = 0;
function sumOfTripledEvens(array){
    if(array %2 == 0){
        const tripledEvenNumber = array * 3;
        sum += tripledEvenNumber;
    }
}
const mappedArr = arr.filter((sumOfTripledEvens));

console.log(sum);

// function sumOfTripledEvens(array) {
//     return array
//         .filter((num) => num % 2 === 0)
//         .map((num) => num * 3)
//         .reduce((acc, curr) => acc + curr);
// }

// console.log(sumOfTripledEvens([1,2,3,4,5,6]));