let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(array){
    let totalAge = 0;
    for(i=0;i<array.length;i++){
        totalAge += array[i].age;
    };
    return totalAge / array.length;
}

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// the above function iterates through the array and, starting with a value of 0, calculates the total age
// (prev + user.age where prev starts at 0) then divides the total by the length of the array to
// get the average age

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28